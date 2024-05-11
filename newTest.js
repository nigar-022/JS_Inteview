// Max number in a array - Javascript

// function countOfArr(number) {
//   return number.reduce((acc, curr) => {
//     let currentCount = acc[curr] !== undefined ? acc[curr] + 1 : 1;
//     let max = 0;
//     let maxCountNumber = null;

//     acc[curr] = currentCount;

//     for (let n in acc) {
//       //console.log(acc[n]);

//       if (acc[n] > max) {
//         max = acc[n];
//         maxCountNumber = n;
//       }
//     }
//     console.log(max, maxCountNumber);
//     return acc;
//   }, {});
// }

// function countOfArr(number) {
//   let count = {};
//   let max = 0;
//   let maxNum = null;

//   for (let n of number) {
//     count[n] = count[n] ? count[n] + 1 : 1;
//   }

//   for (let c in count) {
//     if (count[c] > max) {
//       max = count[c];
//       maxNum = c;
//     }
//   }

//   return maxNum;
// }

//console.log(countOfArr([11, 22, 33, 33, 44, 11, 22, 33, 66]));

// const findLargest = function (numbers) {
//   let max = numbers[0];
//   let secondLargest = -Infinity;

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       secondLargest = max;
//       max = numbers[i];
//     } else if (numbers[i] < max && numbers[i] > secondLargest) {
//       secondLargest = numbers[i];
//     }
//   }

//   return secondLargest;
// };

// console.log(findLargest([1, 2, 3, 4, 5]));

// const findCount = function (str) {
//   let count = {};
//   let max = 0;
//   let maxStr = "";

//   for (let i = 0; i < str.length; i++) {
//     //console.log(str.charAt(i));
//     if (count[str[i]]) {
//       count[str[i]] += 1;
//     } else {
//       count[str[i]] = 1;
//     }
//   }

//   for (let c in count) {
//     if (count[c] > max) {
//       max = count[c];
//       maxStr = c;
//     }
//   }
//   return maxStr;
// };

// console.log(findCount("Hello"));

const groupValues = function (names) {
  let result = {};

  names.forEach((name) => {
    if (result[name[0]]) {
      result[name[0]] = [...result[name[0]], name];
    } else {
      result[name[0]] = [name];
    }
  });

  return result;
};

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

const flattenArr = function (arr) {
  let output = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      output.push(...flattenArr(el));
    } else {
      output.push(el);
    }
  });

  return output;
};

const arr = [1, 2, 3, [4, 5, [6, 7, [8]], 9], 10];
console.log(flattenArr(arr));

const flattenObj = function (obj) {
  let output = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      const temp = flattenObj(obj[key]);

      for (let j in temp) {
        output[key + " " + j] = temp[j];
      }
    } else {
      output[key] = obj[key];
    }
  });

  return output;
};

let arrOfObj = [
  { id: 5 },
  { id: 6, nested: { id: 77 } },
  { id: 5 },
  { id: 7 },
  { id: 6 },
];
console.log(flattenObj(arrOfObj));
