const change = 51;

function getCoins(change) {
  const coins = [1,2,5,10,20,50];
  let arrayRes = [0,0,0,0,0,0]
  let res = 0;
  let res2 = change;
  let auxArray = []
  let i = 0;

  while(res2 !== 0 && res2 > 0){
    res = res2 - coins[i]
    if(res > 0 || res === 0){
      auxArray.push(coins[i])
    }
    i++;
    if(i > 5) {
      res2 = res2 - auxArray[auxArray.length-1]
      arrayRes[auxArray.length-1]++;
      auxArray = []
      i = 0;
    };
  }

  
  return arrayRes
}

console.log(getCoins(change));