// const myPromice = new Promise((resolve, reject) => {});

// myPromice.then((value) => {}).catch((error) => {});

// fetch('https://jsonplaceholder.typicode.com/todos/55')
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error.message));

const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );

s;
