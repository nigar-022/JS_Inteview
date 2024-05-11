// Hoisting

// getName()  // nigar
//getData()  // getData is not a function. Act as a variable
//getData2() // getData2 is not a function. Act as a variable
//getData11()  // Uncaught ReferenceError: Cannot access 'getData11' before initialization
//getData12() //// Uncaught ReferenceError: Cannot access 'getData12' before initialization
// console.log(abc)  // undefined

var abc = 7;

function getName() {
  console.log("Nigar");
}

console.log(getName); // not calling the function. It will print function itself.

var getData = () => {
  console.log("namaste JS");
};

var getData2 = function () {
  console.log("data2");
};

let getData11 = () => {
  console.log("namaste JS");
};

let getData12 = function () {
  console.log("data2");
};

console.log(x);
// console.log(y)
// getName();
// getName2();

var x = 10;
let y = 10;

function getName() {
  console.log("nigar");
}

var getName2 = function () {
  console.log("nigar2");
};

var getName3 = () => {
  console.log("nigar3");
};

// redeclared
var a = 100;
var a = 1000;

let b = 10;

//let b = 10; // can not redeclare in same scope
if (true) {
  let b = 100;
}

// closure

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
console.log(booker);
booker();
booker();

// function w() {
//     const a = 10;

//     return function y() {
//         console.log(a)
//     }

// }

// const z = w();
// console.log(z)
// z()

//corner case

function w() {
  let a = 10;

  a = 100; // remember reference not value
  return function y() {
    console.log(a); //100
  };
}

const z = w();
console.log(z);
z();

// function z() {
//   var b = 900;

//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b); // 7 900
//     }
//     y();
//   }
//   x();
// }
// z();

// closure
function first() {
  let name = "Nigar";

  function second() {
    console.log(name);
  }
  second();
}
first();

// settimeout

function Q() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 3000);
  console.log("JS");
}
Q();

function P() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    });
  }
}
P();

// function N() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)

//     }
// }
// N()

// fix with var only

function M() {
  for (var i = 1; i <= 5; i++) {
    function c(i) {
      setTimeout(() => {
        console.log(i);
      });
    }

    c(i);
  }
}
M();

function P() {
  for (var i = 1; i <= 5; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      });
    })(i);
  }
}
P();

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 0);
}

// closure in event listeners

window.onload = function () {
  document.getElementById("ClickMe").addEventListener("click", function () {
    console.log("clicked");
  });
};

//IIFE

(function a(x) {
  console.log("called once", x);
})(10);

// SCOPE CHAIN
function A() {
  var pp = 900;
  console.log(n); //500
  console.log(pp); // 900

  function B() {
    console.log(n); // 500
    console.log(pp); //900
  }
  B();
}
var n = 500;
A();
//console.log(pp) // not defined

// settimeout

console.log("start");

setTimeout(() => {
  console.log("callback");
}, 0);

fetch("https://jsonplaceholder.typicode.com/posts").then(() =>
  console.log("promise")
);

const mypromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("res");
  } else {
    reject();
  }
}).then((res) => console.log(res));

console.log("end");

let startDate = new Date();

let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expires");

var a = 10;

function add(a) {
  var a = a + 10;
  console.log(a);
}
add(a);

console.log(a);

// function currying
function sumInfi(a) {
  // 5  => 9
  return function (b) {
    //4  => 5
    if (b) return sumInfi(a + b); //first a is 2 and b is 3 = 5 => 5 + 4 =9 => 9+5 = 14

    return a;
  };
}
console.log(sumInfi(2)(3)(4)(5)());

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(2)(3));
//HOC

//duplicate code

const radius = [3, 1, 2, 4];

// const calculateArea = function(radius) {
//     const output = [];

//     for(let i = 0; i< radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }

//     return output
// }

// console.log(calculateArea(radius))

// const calculateCurcumference = function(radius) {
//     const output = [];

//     for(let i = 0; i< radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }

//     return output
// }

// console.log(calculateCurcumference(radius))

//optimize code
//gneric function

const area = function (radius) {
  return Math.PI * radius * radius;
};

const curcumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (arr, logic) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    //similar to map function
    output.push(logic(arr[i]));
  }

  return output;
};

console.log(radius.map(area));
console.log(calculate(radius, area));

console.log(calculate(radius, curcumference));

console.log(calculate(radius, diameter));

//our own map function => polyfill

Array.prototype.calcultae = function (logic) {
  const opt = [];

  for (let i = 0; i < radius.length; i++) {
    opt.push(logic(this[i])); //this referring to radius array
  }

  return opt;
};
//console.log(radius.map(area))
console.log(radius.calcultae(area));

//map

const arr = [5, 3, 4, 2, 1];

function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log(output);

const output2 = arr.map(function double(x) {
  return x * 2;
});
console.log(output2);

const outpu3 = arr.map((x) => x.toString(2));
console.log(outpu3);

//filter

const output4 = arr.filter((n) => n % 2); //return odd numbers
console.log(output4);

//reduce e.g.sum

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(sum(arr));

const output5 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output5);

const output6 = arr.reduce((acc, curr) => (acc = acc + curr), 0);
console.log(output6);

const findMax = function (arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMax(arr));

const output7 = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }

  return acc;
}, 0);
console.log(output7);

const users = [
  { firstname: "Nigar", lastName: "Shaikh", age: 26 },
  { firstname: "Mike", lastName: "steel", age: 56 },
  { firstname: "Alen", lastName: "Nike", age: 78 },
  { firstname: "Jack", lastName: "deson", age: 78 },
  { firstname: "HU", lastName: "gg", age: 26 },
];

const opt = users.map((e) => e.firstname + " " + e.lastName);
console.log(opt);

//count of age
//e.g. {26: 2 , 56: 1, 78: 1}

const opt2 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(opt2);

//(2) ['Nigar', 'HU']

const opt3 = users.filter((e) => e.age < 30).map((u) => u.firstname);
console.log(opt3);

const opt4 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);
console.log(opt4);
