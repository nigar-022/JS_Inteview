//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming

// *********************************************
// REDUCE
//*********************************************/

const arr = [1, 2, 3, 4, 5];

const sumWithoutInitial = arr.reduce(
  (accumlator, currentValue) => accumlator + currentValue,
  10
);
console.log(sumWithoutInitial);

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sumOfObjects = objects.reduce(
  (accumlator, currentValue) => accumlator + currentValue.x,
  0
);
console.log(sumOfObjects);

console.log([1, 2, , 4].reduce((a, b) => a + b));

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};

console.log(Array.prototype.reduce.call(arrayLike, (a, y) => a + y));

const arr1 = [1, [2], [3], 4];

console.log(arr1.map((x) => [x * 2]));
console.log(arr1.flatMap((x) => [x * 2]));

const arr2 = ["it's Sunny in", "", "California"];

console.log(arr2.map((x) => x.split(" ")));
console.log(arr2.flatMap((x) => x.split(" ")));

// *********************************************
// PROTOTYPE
//*********************************************/

// const newObj = new Object({
//     name: 'Nigar'
// })

const newObj = {
  name: "Nigar",
};
console.log(newObj);

const obj2 = {
  city: "Pune",
  __proto__: newObj,
};

console.log(obj2);

const object = new Object();
console.log(object);

const array = new Array();
console.log(array);

Array.prototype.show = function () {
  return this;
};

const cities = ["Pune", "Mumbai"];
console.log(cities.show());

const personPrototype = {
  greet: function () {
    console.log(`my name is ${this.name}`);
  },
};

function Person(name) {
  this.name = name;
}

// Object create

Person.prototype.greet = personPrototype.greet;
const newPerson = new Person("Nigar");
console.log(newPerson);

const personPrototype2 = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype2);
carl.greet();

function Vehicle(name, engine) {
  this.name = name;
  this.engine = engine;
}

Vehicle.prototype.getDetails = function () {
  console.log(`The name of bike is ${this.name}`);
};

let bike1 = new Vehicle("KIA", "6717773");
bike1.getDetails();

class Vehicle2 {
  constructor(name, engine) {
    this.name = name;
    this.engine = engine;
  }

  getDetails() {
    console.log(`The name of bike is ${this.name}`);
  }
}

let bike2 = new Vehicle("KIA", "6717773");
bike2.getDetails();

// sort funcction

const fruits = ["apple", "orange", "banana", "watermelon"];
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

const arr10 = [40, 100, 1, 5, 25, 10];
arr10.sort();
console.log(arr10);

arr10.sort((a, b) => b - a);
console.log(arr10);

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

console.log(Object.keys(items));

items.sort((a, b) => a.value - b.value);
console.log(items);

var list = { you: 100, me: 75, foo: 116, bar: 15 };

console.log(Object.keys(list).sort((a, b) => list[a] - list[b]));
console.log(Object.values(list).sort((a, b) => a - b));

//closure
function first() {
  const name = "Nigar";

  function Second() {
    console.log(name);
  }
  Second();
}
first();

// Output Based
function addNumbers(n1, n2, n3) {
  return n1 + n2 + n3;
}

function addNumbers(n1, n2) {
  return n1 + n2;
}

var sum = addNumbers(1, 2, 3);
console.log(sum);

//     (function(){
//     var a = b =  42;

//    })();
//    console.log(typeof a);
//    console.log(typeof b);

//    (function(){
//     let a = b = 42;
//    })();
//    console.log(typeof a);
//    console.log(typeof b);

//Event Capturing and Bubbling

// var let const scope
console.log(l);
var l = 10;
function f() {
  console.log(l); //10
}
f();
console.log(l); //10

function f() {
  var m = 10;
  console.log(m); //10
}
f();
//console.log(m)   //ReferenceError: m is not defined

//re-declare the variable and user can update
var n = 10;
var n = 20;

n = 50;
console.log(n); //50

let o = 90;
function e() {
  let p = 100;
  console.log(p); //100
  console.log(o); //90
}
e();
//console.log(p) // reference error p is not defined
console.log(o); //90

let a = 10;
function f() {
  if (true) {
    let b = 9;
    let a = 20; //Users can declare the variable with the same name in different blocks

    // It prints 9
    console.log(b);
    console.log(a);
  }

  // It gives error as it
  // defined in if block
  //console.log(b);
}
f();

// It prints 10
console.log(a);

// block scope variable can not be declared but can update
let v = 100;
v = 200;
console.log(v);
//let v =200;   //Identifier 'v' has already been declared

const user = {
  firstName: "Nigar",
  lastName: "Shaikh",
  getName: function () {
    console.log(`Name is ${this.firstName}`);
  },
};

const user2 = Object.create(user);
(user2.firstName = "NIHSUH"), (user2.lastName = "Kdjk");
console.log(user2);
console.log(user);

const person = {
  greet: function () {
    console.log("hello");
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype.greet = person.greet;
const newCPerson = new Person("klkl");
console.log(newCPerson);

const newPersonP = Object.create(person);
newPersonP.greet();

Array.prototype.show = function () {
  return this;
};

const names = ["Nigar", "shaikh"];
console.log(names);
console.log(names.show());

//
// this

function abc() {
  console.log(this); // global window object
}
abc();

function abc() {
  "use strict";
  console.log(this); // undefined
}
abc();

// invoking as a constructor

function xyz() {
  console.log(this); // {} empty object
}

const obj1 = new xyz();
//const obj2 = new xyz();
console.log(obj1 == obj2); // false
console.log(obj2);

const Jonas = {
  greet: function () {
    console.log(this); // Jonas Object
  },
};
Jonas.greet();

const Jonas2 = {
  greet: function () {
    console.log(this); // window
  },
};
const j = Jonas2.greet;
j(); // normal function cal

const Jonas3 = {
  greet: function () {
    return function inner() {
      console.log(this); // window
    };
  },
};
const jj = Jonas3.greet();
jj(); // normal function cal

const Jonas4 = {
  greet: function () {
    const inner = () => {
      console.log(this); // Jonas object
    };
    inner();
  },
};
Jonas4.greet();

const Jonas5 = {
  greet: function () {
    function inner() {
      console.log(this); // Jonas object
    }
    inner.call(this); // use call and apply
  },
};
Jonas5.greet();

const Jonas6 = {
  greet: function () {
    function inner(x) {
      console.log(x);
      console.log(this); // Jonas object
    }
    // inner.call(this, "Nigar"); //
    inner.apply(this, ["Nigar"]); // use call and apply

    const c = inner.bind(this); // bind
    c("Hello World");
  },
};
Jonas6.greet();

function outer() {
  const name = "Nigar";
  let a = 10;
  return function inner() {
    console.log(name);
    a = a + 10;
    console.log(a);
  };
}

//const o = outer();
console.log(o);
o();
o();

//

const user1 = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
};

const { name } = user1;
console.log(name);
