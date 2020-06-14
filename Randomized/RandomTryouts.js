
function rand(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let max = 10
let min = 1
const resArr = []

for (let i = 0; i < max; i++) {
  resArr.push(rand(max, min))
}
resArr
