const runs = 500
const min = 1
const max = 10

function generateRnd() {
  const rndArr = []
  for (let i = 0; i < runs; i++) {
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    rndArr.push(rnd)
  }
  rndArr
  countItems(rndArr)
}

function countItems(arr) {
  const counts = {}
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] = 1 + (counts[arr[i]] || 0)
  }
  console.log(counts)
  evaluate(counts)
}

function evaluate(obj) {
  const valMap = new Map(Object.entries(obj))
  valMap
}

generateRnd()

