const heights = [1, 2, 3, 2, 1]
// const heights = [2, 4, 4, 6, 2]
// const heights = [1, 2, 3]
// const heights = [1, 2, 3, 2, 1, 2, 3]
// const heights = [0, 1000, 1]

function checkSledJump(heights) {
  const max = Math.max(...heights)
  const index = heights.indexOf(max)
  // const maxObj = {max:max,index:index}
  let auxArray = []
  let aux = heights[index];

  for (let i = index - 1; i >= 0; i--) {
    if (aux > heights[i]) {
      auxArray.push("sube")
      aux = heights[i]
    } else {
      auxArray.push("!sube")
    }
  }
  auxArray.push("MAX")
  aux = heights[index]
  
  for(let i = index+1;i<heights.length;i++){
    if (aux > heights[i]) {
      auxArray.push("baja")
      aux = heights[i]
    } else {
      auxArray.push("!baja")
    }
  }
  console.log(auxArray)

  const checkWords = (currentValue) => {
    if(currentValue !== 'sube' && currentValue !== 'baja' && currentValue !== 'MAX'){
      return currentValue
    }
  };
  
  const res = auxArray.filter(checkWords);

  if(!auxArray.includes("baja") || !auxArray.includes("sube")){
    res.push("no")
  }
  
  return (res.length === 0)

}

console.log(checkSledJump(heights))