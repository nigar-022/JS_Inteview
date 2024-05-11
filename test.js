// let a = 10;
// function test() {
//   //console.log(a);
//   let a = 20;
// }
// test(); // What is output here ?
// console.log(a); // What is output here ?

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 0);
}

let obj1 = {
  name: "Mike",
  address: {
    city: "pune",
  },
};
let obj2 = { ...obj1 };
obj2.name = "John";
obj2.address.city = "Mumbai";
console.log(obj2);
console.log(obj1);

function groupValues(arr) {
  let result = {};

  arr.forEach((name) => {
    if (result[name[0]]) {
      result[name[0]] = [...result[name[0]], name];
    } else {
      result[name[0]] = [name];
    }
  });
  return result;
}
const names = [
  "Richard",
  "Elmer",
  "Zack",
  "Jess",
  "Jake",
  "Riley",
  "Drew",
  "Anthony",
  "Aaron",
  "Bernard",
];

console.log(groupValues(names));

const reverEachWordString = function (str) {
  let reverseWord = "";
  let reverseString = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      reverseString = reverseString + reverseWord + " ";
      reverseWord = "";
    } else {
      reverseWord = str[i] + reverseWord;
    }
  }
  return reverseString;
};

console.log(reverEachWordString("Commonlay Asked Javascript"));

const anagram = function (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let charCount = {};

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];

    charCount[char1] = (charCount[char1] || 0) + 1;
    charCount[char2] = (charCount[char2] || 0) - 1;
  }
  for (let count in charCount) {
    if (charCount[count] !== 0) return false;
  }

  return true;
};

console.log(anagram("listen", "silent"));

// const isAnagram = function (str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let sortedStr1 = [...str1].sort();
//   let sortedStr2 = [...str2].sort();

//   for (let i = 0; i < sortedStr1.length; i++) {
//     if (sortedStr1[i] !== sortedStr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isAnagram("rat", "tar"));

// const isAnagram = function (str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let sortedStr1 = str1.split("").sort().join("");
//   let sortedStr2 = str2.split("").sort().join("");

//   if (sortedStr1 === sortedStr2) return true;

//   return false;
// };

// console.log(isAnagram("rat", "car"));

const checkPalindrome = function (str) {
  let l = 0;
  let r = str.length - 1;

  let arr = str.split("");

  while (l < r) {
    if (arr[l] !== arr[r]) return false;
    l++;
    r--;
  }

  return true;
};

console.log(checkPalindrome("5?36@6?35"));

const countowels = function (str) {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let s of str) {
    if (vowels.includes(s)) {
      count++;
    }
  }
  return count;
};
console.log(countowels("hellow"));

const removeVowels = function (str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = [];

  let arr = str.split("");

  for (let s of str) {
    if (!vowels.includes(s)) {
      result.push(s);
    }
  }
  return result.join("");
};
console.log(removeVowels("hellow"));
