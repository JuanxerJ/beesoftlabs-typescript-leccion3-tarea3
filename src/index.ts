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
const callback1 = (value) => console.log("Esto es un texto:", value);
const callback2 = (value) => console.log("Esto es un numero:", value);

const myPromise5: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

myPromise5.then((value) => {
  callback2(2);
  console.log("1");
}); // log: Esto es un numero: 2
