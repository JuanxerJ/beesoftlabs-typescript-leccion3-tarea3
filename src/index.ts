//------------------------------------- Ejercicio 1 --------------------------------------------------------//

const myPromise: Promise<number> = Promise.resolve(1);
myPromise.then((value) => {
  console.log(value);
});
//------------------------------------- Ejercicio 2 --------------------------------------------------------//
const myPromise2: Promise<number> = new Promise((resolve) => {
  resolve(1);
});

myPromise2.then((value: number) => {
  console.log(value + 1);
});
//------------------------------------- Ejercicio 3 --------------------------------------------------------//
const myPromise3: Promise<number> = new Promise((resolve) => {
  resolve(1);
});

myPromise3
  .then((value) => {
    return value + 2;
  })
  .then((value) => {
    console.log(value + 1); // log: 4
  });
//------------------------------------- Ejercicio 4 --------------------------------------------------------//
const myPromise4: Promise<string> = new Promise((resolve, reject) => {
  reject("Error: Operation Failed");
});

myPromise4.catch((err) => {
  console.log(err); // log: 'Error: Operation Failed'
});
//------------------------------------- Ejercicio 5 --------------------------------------------------------//
