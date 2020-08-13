/*
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
*/
function getPINs (observed) {
  const obj = {
    1: ['1', '2', '4'],
    2: ['2', '1', '3', '5'],
    3: ['3', '2', '6'],
    4: ['4', '1', '5', '7'],
    5: ['5', '2', '4', '6', '8'],
    6: ['6', '3', '5', '9'],
    7: ['7', '8', '4'],
    8: ['8', '7', '5', '9', '0'],
    9: ['9', '8', '6'],
    0: ['0', '8']
  }

  const saw = observed.split('')
  let a = obj[saw[0]]
  for (let i = 1; i < saw.length; i++) {
    const tempArr = []
    a.map((n) => obj[saw[i]].map((m) => tempArr.push(n + m)))
    a = tempArr
  }
  return a
}

console.log(getPINs('8'))
console.log('expected: ', ['5', '7', '8', '9', '0'])
console.log(getPINs('11'))
console.log(getPINs('369'))
