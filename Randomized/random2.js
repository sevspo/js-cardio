const runs = 500

let randProm = new Promise((resolve, reject) => {
  const randArr = []
  for (let i = 0; i < runs; i++) {
    let rand = Math.floor(Math.random()*10)
    randArr.push(rand)
  }
  resolve(randArr)

})

function countItems(randArr) {
  const resObj = {}
  for (let i = 0; i < randArr.length; i++) {
    if (!resObj[randArr[i]]) {
      resObj[randArr[i]] = 0;
    }  
    ++resObj[randArr[i]];
  }
  return resObj
}

randProm.then(res => {
  res
  console.log(countItems(res))
  let resObj = countItems(res)
  let resVar = Object.entries(resObj)
  resVar
  let resArr = resVar.map(e => [e[0], Math.floor(e[1]/runs*100*100)/100])
  resArr
  let resReverse = Object.fromEntries(resArr)
  resReverse
})
