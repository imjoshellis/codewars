package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
)

func visit(path string, fi os.FileInfo, err error) error {
	if err != nil {
		return err
	}

	if fi.IsDir() {
		return nil
	}

	read, err := ioutil.ReadFile(path)
	if err != nil {
		panic(err)
	}

	lang, new := os.Args[1], os.Args[2]
	newLower := strings.ToLower(new)

	newContents := strings.Replace(string(read), "Template", new, -1)
	newContents = strings.Replace(newContents, "template", newLower, -1)

	if len(os.Args) > 3 {
		url := os.Args[3]
		newContents = strings.Replace(newContents, "URLSTRING", url, -1)
	}

	newPath := strings.Replace(path, "templates/"+lang, "working", -1)
	newPath = strings.Replace(newPath, "template", new, -1)
	fmt.Println(newPath)

	err = ioutil.WriteFile(newPath, []byte(newContents), 0755)
	if err != nil {
		panic(err)
	}

	return nil
}

func runcmd(cmd string, shell bool) []byte {
	if shell {
		out, err := exec.Command("bash", "-c", cmd).Output()
		if err != nil {
			log.Fatal(err)
			panic("some error found")
		}
		return out
	}
	out, err := exec.Command(cmd).Output()
	if err != nil {
		log.Fatal(err)
	}
	return out
}

func main() {
	if len(os.Args) < 3 {
		log.Println("Not enough arguments. Must be called with:")
		log.Fatal("start [language] [name] [optional:url]")
	}
	lang, name := os.Args[1], os.Args[2]
	err := filepath.Walk("./templates/"+lang, visit)
	if err != nil {
		panic(err)
	}
	cmd := fmt.Sprintf(`git add -a ./working && git commit -ma "Started %v with %v`, name, lang)
	runcmd(cmd, true)
}
