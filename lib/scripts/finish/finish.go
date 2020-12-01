package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	if len(os.Args) < 3 {
		log.Fatal("You must provide a language and name")
	}

	lang := os.Args[1]
	if lang == "ts" {
		lang = "typescript"
	}

	name := os.Args[2]
	old := "working/"
	new := fmt.Sprintf("solved/%v/%v", lang, name)

	err := os.Rename(old, new)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("💾️ Files moved to", new)
	cmd := fmt.Sprintf(`gaa && gcam "Solved %v"`, name)
	fmt.Println("🎉 Want to commit? =>", cmd)
}
