// for of loop

const arr = [1, 2, 3, 4, 5];

for (let arrayElement of arr) {
  console.log(arrayElement);
}

const str = ["NS", "AC", "DC", "SD"];

for (let s of str) {
  console.log(s);
}

const iterable = new Set([1, 1, 1, 2, 3, 4, 5, 5, 6]);

for (let value of iterable) {
  console.log(value);
}

// for in loop

const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(property, object[property]);
}

// spread operator

const numbers = [1, 2, 3, 4, 5];

const sum = function (...numbers) {
  console.log(numbers);
  let sums = 0;

  for (const a of numbers) {
    sums += a;
  }
  //return x + y + z;
  return sums;
};

//console.log(sum(...numbers));

console.log(sum(2, 3));
console.log(sum(2, 3, 4));
console.log(sum(2, 3, 4, 5));

const parts = ["shoulder", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];

console.log(lyrics);

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2[3] = 4;
console.log(arr1, arr2);

// shallow copy and deep copy

const a = {
  food: {
    dinner: "pizza",
  },
};

const b = { ...a };
b.food.dinner = "Chicken";

console.log(b);
console.log(a);

const num = [{ id: 1 }, { id: 2 }];
const num2 = JSON.parse(JSON.stringify(num));

num2[0].id = 100;
console.log(num);
console.log(num2);

const z = [1, [2], [3, [4]], 5];

//const y = [...z]; //shallow copy

const y = JSON.parse(JSON.stringify(z));

y[2][1] = 50;
y[0] = 100;

console.log(z);
console.log(y);

// normal function vs arrow function
printHello("Nifar");

function printHello() {
  console.log(arguments);
}

prints("NS");
var prints = () => {
  console.log(arguments);
};
