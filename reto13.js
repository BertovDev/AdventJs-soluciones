const gifts = ["📷", "⚽️"];
// const gifts = ["🏈🎸", "🎮🧸"]


function wrapGifts(gifts) {
  let auxArray = []
  let auxStr = "*";

  if (gifts.length !== 0) {
    for (let i = 0; i < 1 + gifts[0].length; i++) {
      auxStr = auxStr + "*";
    }
    auxArray.push(auxStr);
    auxStr = ""
    for (let i = 0; i < gifts.length; i++) {
      auxStr = "*" + gifts[i] + "*";
      auxArray.push(auxStr)
      auxStr = ""
    }
    for (let i = 0; i < 2 + gifts[0].length; i++) {
      auxStr = auxStr + "*";
    }
    auxArray.push(auxStr);
  }

  return auxArray;
}

wrapGifts(gifts);