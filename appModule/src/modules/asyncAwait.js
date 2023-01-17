// // 1 exampl
// const asyncfn = async () => {};

// // 2 exampl

// async function asyncFun() {}

// const asyncFn = async () => {
//   return 'Success';
// };

// asyncFn().then((value) => console.log(value));

// const asyncFn = async () => {
//   throw new Error('There was an error!');
// };

// asyncFn()
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error.message));

// const timerPromise = () =>
//   new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

// const asyncFn = async () => {
//   console.log('Timer start');
//   const startTime = performance.now();
//   await timerPromise();
//   const endTime = performance.now();
//   console.log('Timer ended', endTime - startTime);
// };

// asyncFn();

const getData = async (url) =>
  //   new Promise((resolve, reject) =>
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((json) => resolve(json))
  //       .catch((error) => reject(error))
  //   )
  {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };

// getData('https://jsonplaceholder.typicode.com/todos/3')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

const url = 'https://jsonplaceholder.typicode.com/todos';
try {
  const data = await getData(url);
  console.log(data);
} catch (error) {
  console.log(error.message);
}
