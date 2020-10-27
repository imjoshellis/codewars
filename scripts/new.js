import fs from 'fs'
import inquire from 'inquirer'

const Main = async () => {
  let url = process.argv[2]
  if (!url) {
    const { input } = await inquire.prompt([
      {
        type: 'input',
        name: 'input',
        message: 'url: '
      }
    ])
    url = input
  }

  const name = url
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

  const filename = `working/${name}`

  fs.writeFile(
    `${filename}.ts`,
    `// ${url}
    export const ${name} = (arg: string) => {
      return arg
    }`,
    err => {
      if (err) throw err
      console.log('Saved!')
    }
  )

  fs.writeFile(
    `${filename}.test.ts`,
    `import {${name}} from './${name}'
    
    it('does nothing', () => {
      const test = ''
      expect(${name}(test)).toBe('')
    })`,
    err => {
      if (err) throw err
      console.log('Saved!')
    }
  )
}

Main()
