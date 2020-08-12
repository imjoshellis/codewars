const lookup = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90
}

const parseInt = (s) => {
  if (s === 'zero') return 0
  if (s === 'one million') return 1000000
  let int = 0
  const thousandArr = s.split('thousand')
  const thousand = thousandArr.length > 1 ? thousandArr[0].trim() : 'zero'
  const hundred =
    thousand !== 'zero' && thousandArr[1].includes('hundred')
      ? thousandArr[1].split('hundred')[0].trim()
      : thousand === 'zero' && s.includes('hundred')
        ? s.split('hundred')[0].trim()
        : 'zero'
  console.log(thousand)
  console.log(hundred)
  let ten = s.split(' ').slice(-1).pop()
  let one = 'zero'
  if (ten.split('-').length > 1) {
    one = ten.split('-')[1]
    ten = ten.split('-')[0]
  }
  if (isNaN(lookup[ten])) {
    ten = 'zero'
  }
  int = parseInt(thousand) * 1000 + parseInt(hundred) * 100 + lookup[one] + lookup[ten]

  return int
}

console.log(parseInt('one'))
console.log(parseInt('twenty'))
console.log(parseInt('two hundred and forty-six'))
console.log(parseInt('two hundred'))
console.log(parseInt('two hundred thousand and three'), 'expect 200003')
console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen'))
