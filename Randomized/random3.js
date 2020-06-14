const runs = 500
const randArr = []
for (let i = 0; i < runs; i++) {
  let rand = Math.floor(Math.random()*10)
  randArr.push(rand)
}

const resObj = {}

function countItems(randArr) {
  for (let i = 0; i < randArr.length; i++) {
    if (!resObj[randArr[i]]) {
      resObj[randArr[i]] = 0;
    }  
    ++resObj[randArr[i]];
  }
  return resObj
}

const resVar = Object.entries(countItems(randArr))
const resArr = resVar.map(e => [e[0], Math.floor(e[1]/runs*100*100)/100])
const resReverse = Object.fromEntries(resArr)
console.log(resReverse);








