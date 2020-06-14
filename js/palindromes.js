/* /* Challenge 2: Check if a word  is a palindrome */

function isPalin1(str) {
  let revStr = [...str].reverse().join('');
  //return (revStr === str ? true : false)
  return revStr === str;
}

console.log(isPalin1('anna'));
console.log(isPalin1('sevi'));


/* Challenge 4: Captialize Letters */

function capt(str) {
  //split spits where the separator matches. If an empty sting is used, it splits every char with utf-16
  //beware, this can lead to unexpected results.
  const arr = str.toLowerCase().split(' ') 
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].substring(0, 1).toUpperCase() +
    arr[i].substring(1); 
  }
  return arr.join(' ');
}

console.log(capt('all the Words should be capiTalized'))

////////V2

//using array.map
function capt2(str) {
  return str
    .toLowerCase()
    .split(' ')
    // map returns an new array after performing the function on the passed in array
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

console.log(capt2('another string that should be capitalized'))

////////////V3

// using strin.replace() This mehtod syntax is as follows: 
// var newStr = str.replace(regexp|substr, newSubstr|function)
function capt3(str) {
  return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase())
}

console.log(capt3('yet another array to be capitalized'))


/* Challange 5: Max Character, log the most used character in a string. */ 

function maxCharr(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach((char) => {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    } 
  }

  return maxChar;
}

console.log(maxCharr('Be careful because space-is-a-character too'));

/* Challenge Classic FizzBuzz
* this is a classic. Print the numbers from 1 to 100.
* for multiples of 3 print Fizz, for multiples of 5 print Buzz. 
* for number that are both, print FizzBuzz */

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0 ) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i)
    }
  }
}

const buz = fizzBuzz()
