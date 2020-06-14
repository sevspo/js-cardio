/* Challenge 1: Add all numbers */

function addAll() {

  //V1 The old way
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total
   
}

console.log(addAll(1, 3, 4 , 5, 6))

//V2 ES6
function addAllEs6(...rest) {
  
  // let total = 0;
  // rest.forEach((num) => total += num)
  // return total;

  return rest.reduce((acc, cur) => acc + cur)
}

console.log(addAllEs6(1, 3, 4 , 5, 6))


/* Challenge 2: Sum all Primes up to 10 */
//excluding 1 in this case

function sumPrimes(max) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if(i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= max; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }

  return total;
}

console.log(sumPrimes(100))

/* Challenge 3: Seek and destroy */
/* Remove from an array whatever is in the following arguments.
*  Retrun the leftover njumbers in an array */

//V1
function seekD(arr) {
  const args = Array.from(arguments)
  args
  function filterArr(arr) {
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filterArr)
}
console.log(seekD([1, 2, 3, 4, 5, 6, 'sevi'], 1, 3, 5))

//V2 
function seekDV2(arr, ...del) {
  return arr.filter(el => !del.includes(el))
}

console.log(seekDV2([1, 2, 3, 4, 5, 6, 'sevi'], 1, 3, 5))

/* Challenge 4: Sort People by Height
* There are People standing in the woods. Sort the people, 
* but don't move the trees (-1) around */

function sortPeopleByHeight(arr) {
  const treePosArr = [];
  const peoplesHeights = [];

  arr.forEach((el, i) => {
    if (el === -1) {
      treePosArr.push(i)
    } else {
      peoplesHeights.push(el)
    }
  });
  
  treePosArr
  peoplesHeights
  
  const sortedPeople = peoplesHeights.sort()
  
  treePosArr.forEach((el, i) => sortedPeople.splice(treePosArr[i], 0, -1))
  
  return sortedPeople;
}

console.log(sortPeopleByHeight([-1, 185, 130, 180, -1, -1, 150]));

/* Challenge 5: Find the missing letter in a passed letter range and return it.
* if no letter is missing, return undefined.
exapmple: missingLetter('abcdf') == e */

function findMissingL(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

console.log(findMissingL('abcdeg'))


/* Challenge 6: Even and Odd sums
* Pass in an array and retrun the sum of all even and odd numbers */
// You could refactor that one!
function sumEvenOdd(arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven = sumEven + arr[i] 
    } else {
      sumOdd = sumOdd + arr[i];
    }
  }
  
  return [sumEven, sumOdd]

}

console.log(sumEvenOdd([1, 3, 5, 2, 4, 8]))
