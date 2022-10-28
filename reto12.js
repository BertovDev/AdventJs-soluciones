// const array = [5, 3, 6, 7, 9]
// const array = [2, 4, 6, 8, 10]
const array = [14, 10, 8, 2, 3, 6]

function getMinJump(obstacles) {
  const obsOrdenados = obstacles.sort()
  let ruta = []
  let aux = []

  for(let i = 0;i<=Math.max(...obstacles);i++){
    ruta.push(i)
  }

  ruta.map((el, index) => {
    (obsOrdenados.find((el2) => el === el2 ? ruta.splice(index, 1, "X") : ""))
  })

  for (let salto = 1; salto <= 10; salto++) {
    for (let i = 0; i < ruta.length; i = i + salto) {
      if (ruta[i] === "X") aux.push(salto)
    }
  }

  aux = aux.filter((element, index) => {
    return aux.indexOf(element) === index;
  })

  for (let i = 1; i < ruta.length; i++) {
    if (aux.includes(i) === false) {
      aux = []
      aux.push(i)
      i = ruta.length - 1
    }
  }

  return aux[0]
}

getMinJump(array);