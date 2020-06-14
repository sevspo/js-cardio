/* Challenge 1: Reverse a string */

//By using array.reverse() 
function reverseStringV1(str) {
  //the quotes are important, since they define the separators
  //this methods can be cleaned up and chained together.
  const arr = str.split(''); 
  arr.reverse();
  const rev = arr.join('');
return rev;
}

console.log(reverseStringV1('severin'))

///////////////////V2

// using spread opperator
function revStringV2(str) {
  return [...str].reverse().join('');
}

console.log(revStringV2('severin'))

//////////////////V3

// using a reversed for loop
function revStrV3(str) {
  let revStr = '';
  for (let i = str.length -1; i >= 0; i--) { //beware of the minus -1
    revStr = revStr + str[i];
  }
  return revStr;
}

console.log(revStrV3('severin'))

///////////////////V4

// using a for loop
function revStrV4(str) {
  let revStr = '';
  for (i = 0; i <= str.length -1; i++) {
    revStr = str[i] + revStr;
  }
  return revStr;
}

console.log(revStrV4('severin'))

///////////////////V5

// using a for of loop
function revStrV5(str) {
  let revStr = '';
  for(let char of str) {
    revStr = char + revStr;
  }
  return revStr;
}

console.log(revStrV5('aurelia'))

///////////////////V6 

// using array.forEach
function revStr6(str) {
  //this function could even be condensed more
  let revStr = '';
  let arr = str.split('') /*?*/
  arr.forEach(char => {
    revStr = char + revStr;
  });
  return revStr
}

console.log(revStr6('aurelia'))

//V7 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// using array.reduce()
function revStr7(str) {

  let arr = str.split('')
  return arr.reduce((acc, curr) => curr + acc, '')
}

console.log(revStr7('aurelia141118'))