(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x); //1
    console.log(y); //2
  }
  console.log(x); //undefined
  console.log(y); // 2
})();

const flattenArray = function (arr) {
  let outputArr = [];

  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      outputArr.push(...flattenArray(ele));
    } else {
      outputArr.push(ele);
    }
  });
  return outputArr;
};

const arr = [1, 2, 3, [4, 5, [6, 7, [8]], 9], 10];
console.log(flattenArray(arr));

console.log(...arr.flat(Infinity)); // with inbuit function
console.log(...arr.flat(3)); // with unbuit function

// var arr1 = [[1,2], [3,4],[4,5]];
// console.log(flattenArray(arr1))

const objectt = {
  name: "Nigar",
  age: 26,
  address: { flatNo: 112, city: "Pune" },
};

console.log(Object.keys(objectt));
console.log(Object.values(objectt));

const flattenObj = function (obj) {
  let outputObj = {};

  Object.keys(obj).forEach((key) => {
    console.log(typeof obj[key]);
    if (typeof obj[key] === "object") {
      // outputObj[key] = {...flattenObj(obj[key])}

      const temp = flattenObj(obj[key]);

      for (const j in temp) {
        outputObj[key + "." + j] = temp[j];
      }
    } else {
      outputObj[key] = obj[key];
    }
  });
  return outputObj;
};

// console.log(flattenObj(objectt))

let arrOfObj = [{ id: 5 }, { id: 6 }, { id: 5 }, { id: 7 }, { id: 6 }];
console.log(flattenObj(arrOfObj));

// Reverse String

const reverseString = function (str) {
  return str.split("").reverse().join("");
};
console.log(reverseString("nigar"));

const rStr = function (s) {
  let n = s.length - 1;
  let char = s;
  let temp;

  for (let i = 0, j = n; i < j; i++, j--) {
    temp = char[i];
    char[i] = char[j];
    char[j] = temp;
  }

  return char;
};

console.log(rStr(["h", "e", "l", "l", "o"]));

const reverseWord = function (str) {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseWord("Commonlay Asked Javascript"));

//Number Pattern

//Triangle pattern (1)

// let n = 5;
// let string = "";

// for(let i =1; i <= n ; i++) {

//     for(let j = 1 ; j <= i ; j++ ) {

//         string  += j
//     }
//     string += '\n'
// }

// console.log(string)

//Triangle pattern (2)

// let nn = 5;
// let s= ""
// for(let i = 1 ; i <= n ; i++) {
//     for(let j = 1 ; j <= i; j++) {
//         s += i
//     }
//     s += '\n'

// }
// console.log(s)

//Triangle pattern (3)

let n = 4;
let string = "";
let count = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);

//Hoisting

var greeting = function () {
  console.log("Hi");
};
var greeting = function () {
  console.log("Hi");
};

// function greeting () {
//     console.log('Hello')
// }

// function greeting () {
//     console.log('Hi')
// }

greeting();
greeting();

// const arr = ['a', 'b', 'c', 'b', 'a', 'a', 'd', 'c'];
//const arr = [11,22,33,44,11,22,33,66]

//const count= [];

for (const n of arr) {
  count[n] = count[n] ? count[n] + 1 : 1;
}

console.log(count);

function countOfString(string) {
  return string.split("").reduce((accumlator, currentValue) => {
    let currentCount =
      accumlator[currentValue] !== undefined ? accumlator[currentValue] : 0;

    if (currentCount) {
      currentCount = currentCount + 1; // If previously counted + 1
    } else {
      currentCount = 1; // Else initialize with first occurence.
    }

    accumlator[currentValue] = currentCount;
    return accumlator;
  }, {});
}

console.log(countOfString("Hello there"));

// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//   var data = countOccurences("thequickbrownfoxjumpsoverthelazydog","t");
//   console.log(data);

//count number of vowels in string

const countVowels = function (str) {
  //return str.match(/[aeiou]/gi).length;

  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const s of str) {
    if (vowels.includes(s)) {
      count++;
    }
  }

  return count;
};

console.log(countVowels("nigar"));

//calculate the number of days between two dates

var date1 = new Date("10/20/2023");
var date2 = new Date("10/30/2023");

//var timeDiff = date2.getTime() - date1.getTime();

//var daysDiff = timeDiff / (24*60*60*1000)

var daysDiff = Math.round(Math.abs(date1 - date2) / (24 * 60 * 60 * 1000));

console.log(daysDiff);

//remove duplicates from array

const removeDuplicate = function (nums) {
  let unique = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[unique] = nums[i];
      unique++;
    }
  }

  nums.length = unique;
  return nums;
};

const removeDuplicate3 = function (nums) {
  let unique = [];

  for (let n of nums) {
    if (!unique.includes(n)) {
      unique.push(n);
    }
  }
  return unique;
};

const removeDuplicate2 = function (nums) {
  let unique = nums.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return unique;
};

console.log(removeDuplicate3([1, 1, 1, 2, 3, 3, 4, 5]));

const numbers = [1, 1, 1, [2, [3, 4, 3], 3, 4], 5];
const uni = [...new Set(numbers)];
console.log(uni);

//const arr = [11, 22, 33, 44, 11, 22, 33, 66];

//let count = {};

// for (const a of arr) {
//   count[a] = count[a] ? count[a] + 1 : 1;
// }

// arr.forEach((el) => {
//   if (count[el]) {
//     count[el] += 1;
//   } else {
//     count[el] = 1;
//   }
// });

const countOfArr = function (arr) {
  return arr.reduce((acc, curr) => {
    let currentCount = acc[curr] !== undefined ? acc[curr] : 0;

    if (currentCount) {
      currentCount += 1;
    } else {
      currentCount = 1;
    }

    acc[curr] = currentCount;
    return acc;
  }, {});
};
console.log(countOfArr([11, 22, 33, 44, 11, 22, 33, 66]));

// const countOfString = function (string) {
//   return string.split("").reduce((acc, curr) => {
//     let currentCount = acc[curr] !== undefined ? acc[curr] : 0;

//     if (currentCount) {
//       currentCount += 1;
//     } else {
//       currentCount = 1;
//     }

//     acc[curr] = currentCount;
//     return acc;
//   }, {});
// };

console.log(countOfString("Hello there"));

//

/**Create a function `groupValues` that takes an array of names, and
returns an array of objects with one key as a letter of the alphabet
and the value as an array of the names that start with that letter

Note: Each object in the output array should have exactly 1 key and not more than 1
Additional: Return the output in alphabetical order
```
const output = [
    {
        A: ['Aaron', 'Anthony']
    },
    {
        B: ['Bernard']
    },
    {
        R: ['Richard', 'Riley']
    },
    {
        Z: ['Zack']
    }
]
*/

const groupValues = function (names) {
  let res = {};

  names.forEach((name) => {
    if (res[name[0]]) {
      res[name[0]] = [...res[name[0]], name];
    } else {
      res[name[0]] = [name];
    }
  });

  return res;
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

// function groupValues(arr) {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (result[arr[i][0]]) {
//       result[arr[i][0]] = [...result[arr[i][0]], arr[i]];
//     } else {
//       result[arr[i][0]] = [arr[i]];
//     }
//   }
//   return result;
// }

const orders = {
  orderId: "order-12345",
  product: {
    targetDate: "2-2-2024",
    orderItems: [
      {
        orderId: "order-12345",
        quantity: 2,
        sku: "AAA",
        productTitle: "Shirt",
      },
    ],
  },
};

const outOfStock = {
  item: [
    {
      message: "Out of stock",
      orderItems: {
        orderId: "order-12345",
        requestedQuantity: 5,
        availableQuantity: 2,
        sku: "AAA",
      },
    },
  ],
};

const products = orders.product.orderItems.map((item) => {
  const outOfStockItem = outOfStock.item.find(
    (stockItem) => stockItem.orderItems.sku == item.sku
  );

  if (outOfStock) {
    return {
      productTitle: item.productTitle,
      sku: item.sku,
      Status: "Out of stock",
      quantity:
        outOfStockItem.orderItems.requestedQuantity -
        outOfStockItem.orderItems.availableQuantity,
    };
  }
});

console.log(...products);

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
