function daysToXmas(date) {
  // You can easily minus Dates and they transform them to days by dividing the ms of a day
  return Math.ceil((new Date("Dec 25, 2021") - date) / (24 * 60 * 60 * 1000))
}

const date = new Date("Dec 24, 2022")

console.log(daysToXmas(date))
