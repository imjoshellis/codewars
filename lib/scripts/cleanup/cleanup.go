package main

import (
	"fmt"
	"io"
	"log"
	"os"
	"regexp"
)

func main() {
	confirmMove()
}

func moveFiles() {
	/* ideal structure:
	* solved/
	* ├─ README.md
	* ├─ go/
	* │	 ├─ README.md
	* │	 └─ BuildTree/
	*	│ 		├─ README.md
	*	│ 		├─ BuildTree.go
	*	│			└─ BuildTree_test.go
	*	└─ typescript/
	* 	 ├─ README.md
	* 	 └─ IsMatch/
	*	 	  	├─ README.md
	*	 		  ├─ IsMatch.ts
	*	 			└─ IsMatch.test.ts
	 */

	// load up list of files in solved_old
	var err error
	file, err := os.Open("./solved_old")
	check(err)
	defer file.Close()
	names, err := file.Readdirnames(0)
	check(err)

	// split list into ts/go slices
	tss := []string{}
	tsrx, _ := regexp.Compile(`[a-zA-Z0-9]+\.ts`)
	gos := []string{}
	gorx, _ := regexp.Compile(`[a-zA-Z0-9]+\.go`)
	for _, name := range names {
		if tsrx.MatchString(name) {
			tss = append(tss, name)
		}
		if gorx.MatchString(name) {
			gos = append(gos, name)
		}
	}

	// loop over typescript file names
	for _, f := range tss {
		// make a directory
		dir := "./solved/typescript/" + f[:len(f)-3] + "/"
		err = os.Mkdir(dir, 0755)
		check(err)

		// copy the main file
		oldFile := "./solved_old/" + f
		newFile := dir + f
		copyFile(oldFile, newFile)

		// copy the test file
		testName := f[:len(f)-3] + ".test.ts"
		oldTest := "./solved_old/__test__/" + testName
		newTest := dir + testName
		copyFile(oldTest, newTest)

		// make a readme
		emptyFile, err := os.Create(dir + "README.md")
		if err != nil {
			log.Fatal(err)
		}
		emptyFile.Close()
	}

	// loop over go file names
	for _, f := range gos {
		// make a directory
		dir := "./solved/go/" + f[:len(f)-3] + "/"
		err = os.Mkdir(dir, 0755)
		check(err)

		// copy the main file
		oldFile := "./solved_old/" + f
		newFile := dir + f
		copyFile(oldFile, newFile)

		// copy the test file
		testName := f[:len(f)-3] + "_test.go"
		oldTest := "./solved_old/__test__/" + testName
		newTest := dir + testName
		copyFile(oldTest, newTest)

		// make a readme
		emptyFile, err := os.Create(dir + "README.md")
		if err != nil {
			log.Fatal(err)
		}
		emptyFile.Close()
	}
}

func check(err error) {
	if err != nil {
		log.Println(err)
	}
}

func copyFile(old string, new string) {
	in, err := os.Open(old)
	check(err)
	defer in.Close()

	out, err := os.Create(new)
	check(err)
	defer out.Close()

	_, err = io.Copy(out, in)
	check(err)
}

func confirmMove() {
	// load up list of files in solved_old
	var err error
	oldDir, err := os.Open("./solved_old")
	check(err)
	defer oldDir.Close()
	oldNames, err := oldDir.Readdirnames(0)
	check(err)

	// load up list of files in solved/go
	goDir, err := os.Open("./solved/go")
	check(err)
	defer goDir.Close()
	goNames, err := goDir.Readdirnames(0)
	check(err)

	// load up list of files in solved/typescript
	tsDir, err := os.Open("./solved/typescript")
	check(err)
	defer tsDir.Close()
	tsNames, err := tsDir.Readdirnames(0)
	check(err)

	// print results
	fmt.Println(len(oldNames), len(goNames), len(tsNames), len(oldNames)-len(goNames)-len(tsNames)+2)
}
