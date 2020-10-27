import fs from 'fs'
import inquire from 'inquirer'

const Main = async () => {
  let name
  await inquire
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'name: '
      }
    ])
    .then(ans => {
      name = ans.name
    })

  const filename = `working/${name}`

  fs.writeFile(
    `${filename}.ts`,
    `export const ${name} = (arg: string) => {
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
