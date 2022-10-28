

const letter = ")bici( casa play";

function checkLetter(letter) {
  let res = true

  const letterAux = letter.trim().split(" ")

  letterAux.forEach(el => {
    if (el.includes("(") && el.includes(")")) {
      if (el.match(/[.*+\-?^${}|[\]\\]/g)) res = false;
      if (el.includes("()")) res = false
      if (el.charAt(0) !== "(" || el.charAt(el.length - 1) !== ")") res = false
    } else {
      if (el.includes("(") && !el.includes(")")) res = false
      if (el.includes(")") && !el.includes("(")) res = false
    }

  })

  console.log(letterAux)
  return res
}


// console.log(checkLetter(letter))

