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

  const oldPath = `working/${name}`

  fs.rename(`${oldPath}.ts`, `solved/${name}.ts`, err => {
    if (err) throw err
    console.log('Successfully renamed main file!')
  })

  fs.rename(`${oldPath}.test.ts`, `solved/__test__/${name}.test.ts`, err => {
    if (err) throw err
    console.log('Successfully renamed test file!')
  })
}

Main()
