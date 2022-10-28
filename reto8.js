function maxProfit(prices) {
  let resMinMax = 0;

  console.log(prices)

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (i === 0 && j === i + 1) {
        resMinMax = prices[j] - prices[i]
      }
      if (resMinMax < (prices[j] - prices[i])) {
        resMinMax = prices[j] - prices[i]
      }
    }

  }

  if (resMinMax === 0) resMinMax = -1;
  console.log(resMinMax)

  return resMinMax
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc);