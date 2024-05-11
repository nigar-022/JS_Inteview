// greet("john");

// var greet = (name) => {
//   console.log("Good Day", name);
// };

// function greet(name) {
//   console.log("Hello", name);
// }

// greet("john");

// //

// function left() {
//   console.log("left"); // console.log return undefined. It is falsy value
// }

// function right() {
//   console.log("right");
// }

// left() || right();

// //

// if ([]) {
//   console.log("Hello");
// } else {
//   console.log("bye");
// }

// function practice() {
//   console.log(x); // undefined

//   {
//     var x = 2;
//     {
//       let x = 5;
//       console.log(x); //5
//     }

//     console.log(x); //2
//   }
// }

// practice();

// //

// // let x = 10;

// // {
// //   console.log(x);  // Uncaught ReferenceError: Cannot access 'x' before initialization
// //   let x = 20;
// //   console.log(x);
// // }

// var greeter = "hey hi";

// function test() {
//   var greet2 = "Hey Hello";
//   console.log(greet);
// }
// test();

// //console.log(greet2);

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// // for (let i = 0; i < 10; i++) {
// //   setTimeout(() => console.log(i), 1000);
// // }

// // for (var i = 0; i < 10; i++) {
// //   setTimeout(() => console.log(i), 1000);
// // }

// let x = 10;

// {
//   //console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
//   let x = 20;
//   console.log(x); //20
// }
// console.log(x); //10

// function a() {
//   console.log("Hiiii");
// }

// function a() {
//   console.log("Hello");
// }

// a(); //Hello

// var greet = () => {
//   console.log("Good Day");
// };

// function greet() {
//   console.log("Hello");
// }

// greet(); // Good Day
// greet(); // Good Day

console.log("1");

setTimeout(() => {
  console.log("2");
});

Promise.resolve(() => console.log("3"))
  .then((res) => res()) //Execute the function passed to resolve()
  .then(() => console.log("4"));

console.log("5");
