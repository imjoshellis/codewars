import fs from 'fs'
import inquire from 'inquirer'

const Main = async () => {
  let url = process.argv[2]
  let name = process.argv[3]
  if (!url) {
    const { input } = await inquire.prompt([
      { type: 'input', name: 'input', message: 'url: ' }
    ])
    url = input
  }

  if (!name) {
    const { input } = await inquire.prompt([
      { type: 'input', name: 'input', message: 'name: ' }
    ])
    name = input
  }

  if (!name) {
    name = url
      .split('/')
      .filter(w => !!w)
      .reverse()[0]
      .split('-')
      .map((w, i) => {
        const word = [...w]
        word[0] = i === 0 ? word[0] : word[0].toUpperCase()
        return word.join('')
      })
      .slice(0, 3)
      .join('')
  }

  const [first, ...rest] = name
  const capitalizedName = [first.toUpperCase(), ...rest].join('')

  const filename = `working/${capitalizedName}`

  fs.writeFile(
    `${filename}.go`,
    `// Package main has solved algorithms
    // ${url}
    package main
    
    // import log "github.com/sirupsen/logrus"
    
    func ${name}() {
    }
    
    func main() {
      log.Info(${name}())
    }`,
    err => {
      if (err) throw err
      console.log(`💾️ Saved! ${filename}.go`)
    }
  )

  fs.writeFile(
    `${filename}_test.go`,
    `package main
    
    func Test${capitalizedName}(t *testing.T) {
      exp := []string{"1"}
      args := []int{1}
      for i, arg := range args {
        res := ${name}(arg)
        if res != exp[i] {
          t.Fatalf("Expected %v, got %v with %v arg", exp[i], res, arg)
        }
      }
    }`,
    err => {
      if (err) throw err
      console.log(`💾️ Saved! ${filename}_test.go`)
    }
  )
}

Main()
