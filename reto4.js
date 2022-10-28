function createXmasTree(height) {

  let str = ""

  let aux = 1

  for (let i = height - 1; i >= 0; i--) {
    for (let j = 0; j < (height * 2) - 1; j++) {
      if (j === i) {
        for (let z = 0; z < aux; z++) {
          str += "*"
        }
        j += aux - 1;
        aux += 2;
      } else {
        str += "_"
      }
    }
    str += "\n"
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < (height * 2) - 1; j++) {
      if (j === height - 1) {
        str += "#"
      } else {
        str += "_"
      }
      if (i == 0 && j == (height * 2) - 2) {
        str += "\n"
      }
    }
  }

  return str
}

console.log(createXmasTree(11))
