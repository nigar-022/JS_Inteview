//callback

function greeting(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = "Nigar";
  callback(name);
}

processUserInput(greeting);

const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("Hello from promise");
    }, 2000);
  } else {
    reject("error");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// function getData() {
//     setTimeout(() => {
//        console.log(data)
//     },1000)
// }

// // getData()

// function createData(newData,callback) {
//     setTimeout(() => {
//         data.push(newData)
//         callback()
//     },5000)
// }

// createData({name: 'Vivek', profession: 'IT'},getData)

//PROMISE

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
console.log(fetchPromise);

// const fetchPromise = fetch(
//     "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((dataP) => console.log(dataP[0].name))
  .catch((error) => console.error(`could not get ${error}`));

// fetchPromise
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error))

// fetchPromise.then((response) => {
//     console.log(response.status)
//     console.log(fetchPromise)

//     // const dataP = response.json();
//     // dataP.then((d) => {
//     //     console.log(d[0].name)
//     // })
// })

console.log("Started Reuqest");

//async await

async function fetchData() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    console.log(response);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    // return data
  } catch (error) {
    console.error(`${error}`);
  }
}
// const promise = fetchData();
// promise.then((data) => console.log(data[0].name));
fetchData();

//SetTimeout

const timeoutId = setTimeout(() => {
  console.log("Hello");
}, 1000);

clearTimeout(timeoutId);

// const intId = setInterval(() => {
//     console.log('hello')
// },2000)

// Promise All

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

const promise4 = new Promise((resolve, reject) => {
  if (true) {
    resolve("run");
  } else {
    reject();
  }
});

promise4
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
