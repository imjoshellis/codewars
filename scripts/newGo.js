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
    `// Package algos has solved algorithms
    // ${url}
    package algos

    func ${name}() {
    }`,
    err => {
      if (err) throw err
      console.log(`💾️ Saved! ${filename}.go`)
    }
  )

  fs.writeFile(
    `${filename}_test.go`,
    `package algos
    
    func Test${capitalizedName}() {
    }`,
    err => {
      if (err) throw err
      console.log(`💾️ Saved! ${filename}_test.go`)
    }
  )
}

Main()
