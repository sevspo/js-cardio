let foo = (x) => {
  console.log("calculating!");
  return x + 5;
}

let memoize = (foo) => {
  let cache = {};
  return (args) => {
    let n = args
    if (n in cache) {
      console.log('fetching!')
      return cache[n]
    } else {
      let result = foo(n)
      cache[n] = result
      return result;
    }
  }
}

let memoizedFoo = memoize(foo);
console.log(memoizedFoo(5))
console.log(memoizedFoo(5))