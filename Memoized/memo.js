let func = () => {
  return (n) => {
    let result = n * 2;
    return result;
  }
}

let funkyfunc = func();
let res = funkyfunc(4)
console.log(res)
console.log(funkyfunc(7))