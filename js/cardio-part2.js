/* Chalenge 1: longest Word */
/* Find the longest word in a string */


///Refactor this one to actually return the longeset word?
function lWord(str) {
  const arr = str.toLowerCase().match(/[a-z0-9]+/g)
  
  const sorted = arr.sort((a, b) => b.length - a.length);
  
  const longestWord = sorted.filter((w) => w.length === sorted[0].length);

  if (longestWord.length === 1) {
    return longestWord[0];
  } else {
    return longestWord;
  }
}

console.log(lWord('which of these, words is the loooongest'))

/* Challenge 2: Array Chunking */
/* Split an array into chunked arrays of a specific length 
* ex: chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]
*/ 


//V1
function chunkArray(arr, len) {
   const result = [];
   let i = 0;

   while (i < arr.length) {
      result.push(arr.slice(i, i + len));
      i += len;
   }

   return result;

}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

//V2
// I do get it now, it works thanks to references beeing passed!!! elaborate on that.
function chunk2(arr, len) {
  const chunk = [];

  arr.forEach(el => {
    const last = chunk[chunk.length - 1];

    if (!last || last.length === len) {
      chunk.push([el]);
    } else {
      last.push(el)
    }

  });
  return chunk
}

console.log(chunk2(['eins', 'zwei', 'drei', 'vier', 'funf', 'sechs', 'sieben', 'acht'], 2));


/* Challege 3: Flatten Arrays */
//Try this one using for loops, look up the example used in Front-End Nanodegree.
// They both flatten only one level

function flatArr(arr) {
  
  //V1 Using Reduce
  // return arr.reduce((a, b) => {
  //   return a.concat(b);
  // })

  //V2 Using .apply() Hmmmmm?
  //return [].concat.apply([], arr)

  //V3 Using spread operator
  return [].concat(...arr)

  //You should try this one with recursion and find out what it can do.
}

console.log(flatArr([['eins', 'zwei'], ['drei', 'vier'], ['funf', 'sechs', ['sieben', 'acht']]]))

/* Challenge 4: Anagram */
function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

//helper function

function formatStr(str) {
  return str
    .replace(/[^\w]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

console.log(isAnagram('elbow', 'below'))

/* Challenge 5: Letter Changes */
// Change every letter of the string to the one that follows and capitalize


function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if(char === 'z' || char === 'Z') {
      return 'a'
    } else {
      return String.fromCharCode(char.charCodeAt() + 1)
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, (v) => v.toUpperCase())

  return newStr;
}


console.log(letterChanges('Severin ist toll'))

