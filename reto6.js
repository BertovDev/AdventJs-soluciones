function sumPairs(numbers, result) {

  let res = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {

      if ((numbers[i] + numbers[j]) === result) {
        console.log(numbers[i], numbers[j])
        res.push(numbers[i])
        res.push(numbers[j])

        return res
      }
    }
  }

  return null
}


const arrayTest = [3, 5, 7, 2]
const arrayTest2 = [-3, -2, 7, -5]

console.log(sumPairs([6, 7, 1, 2], 8))