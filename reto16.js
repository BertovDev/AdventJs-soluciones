// const symbols = '...'
// const symbols = '.,'
// const symbols = ".........!"
// const symbols = '.;!'
const symbols = ';.W';

function decodeNumber(symbols) {
  let res = 0;
  const diccionario = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100
  }

  const regex = /.|,|:|;|!/g

  let aux = symbols.match(regex)
  console.log(aux)

  aux.map((el, index) => {
    for (const [key, value] of Object.entries(diccionario)) {
      if (el === key) {
        aux.splice(index, 1, value)
      }
    }
  })

  if (aux.every((el) => typeof el === "number") === false) {
    res = Number.NaN
  } else {

    for (let i = 0; i < aux.length; i++) {
      if (aux[i] < aux[i + 1]) {
        res = res + (aux[i] * -1)
      } else {
        res = res + aux[i]
      }
    }
  }


  console.log(res)

  return res
}


decodeNumber(symbols)