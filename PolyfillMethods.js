// *********************************************
// POLYFILL FOR REDUCE
//*********************************************/

//https://medium.com/nerd-for-tech/polyfill-for-array-map-filter-and-reduce-e3e637e0d73b

//https://www.geeksforgeeks.org/implement-polyfill-for-array-prototype-reduce-method-in-javascript/

const arr = [1, 2, 3, 4];

const sum = arr.reduce(
  (accumlator, currentValue) => accumlator + currentValue,
  10
);
console.log(sum);

Array.prototype.myReducer = function (callback, initialValue) {
  let accumlator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumlator !== undefined) {
      accumlator = callback.call(undefined, accumlator, this[i], i, this);
    } else {
      accumlator = this[i];
    }
  }
  return accumlator;
};

console.log(arr.myReducer((total, elem) => total + elem));

// // *********************************************
// POLYFILL FOR for Each
//*********************************************/

console.log(arr.forEach((el) => console.log(el)));

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
console.log(arr.myForEach((item) => console.log(item)));

// *********************************************
// POLYFILL FOR MAP
//*********************************************/

//https://www.geeksforgeeks.org/implement-polyfill-for-array-prototype-map-method-in-javascript/

const result = arr.map((item) => item * 2);
console.log(result);

Array.prototype.myMap = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

const res = arr.myMap((item) => item * 2);
console.log(res);

// *********************************************
// POLYFILL FOR Filter
//*********************************************/

console.log(arr.filter((num) => num >= 2));

Array.prototype.myFilter = function (callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      //it return true and false
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const r = arr.myFilter((num) => num >= 2);
console.log(r);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

const out = [1, 2, 3, 3, 4, 4, 5, 5].unique();
console.log(out);
