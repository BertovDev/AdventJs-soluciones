// const ids = [ 5, 6, 1, 2, 3, 7, 0 ] 
// const ids = [0, 1, 2, 3, 4]
// const ids = [0]
const ids =[97,99,98,100]

function missingReindeer(ids) {
  let res;
  let aux = []
  console.log(ids)
  ids.sort(function(a,b){return a-b});
  console.log(ids)
  
  for (let i = 0; i < ids.length - 1; i++) {
    console.log(ids[i + 1] - ids[i])
    if (ids[i + 1] - ids[i] !== 1) {
      console.log(ids[i] + 1)
      res = ids[i] + 1
    }
    aux.push((ids[i + 1] - ids[i]))
  }
  console.log(aux)
  console.log("a",aux.filter(el => el !== 1))

  if ((aux.filter(el => el !== 1)).length === 0) {
    if (ids.length > 1) {
      res = ids[ids.length - 1] + 1
    }
    if (ids.length === 1 && ids[ids.length - 1] > 0) {
      res = ids[ids.length - 1] - 1
    }

    if (ids.length === 1 && ids[ids.length - 1] === 0) {
      res = ids[ids.length - 1] + 1
    }

    if(ids[ids.length-1] === 100){
      res = ids[0] - 1;
    }

  }
  console.log(res)
  return res
}

missingReindeer(ids)