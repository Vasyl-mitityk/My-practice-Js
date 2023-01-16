// const myArray = [1, true, "Vasyl", 10];
// console.log(myArray.length);

// const myArray2 = [1, true, "Vasyl"];

// console.log(myArray === myArray2);

// const myArray3 = myArray;

// console.log(myArray === myArray3);

// const myArray4 = new Array(1, false, true, "Vasyl");

// console.log(myArray4);

//-------------------------
// console.log(myArray[0]);

// myArray[2] = "ABC";
// myArray[3] = true;

// // Додає в кінець масива
// myArray.push("VaS");

// ///Удаляє і повертає удаленне
// myArray.pop();

// //додає в початок масива
// myArray.unshift("VAsyl");
// myArray.unshift(false);

// //удаляє перший елемент масива і повертає його
// myArray.shift();
// console.log(myArray);

//перебирає масив  forEach не міняє оригінальний роби дію але не повертає нічого
// const res = myArray.forEach((el) => console.log(el * 2));
// console.log(res);
// console.log(myArray);

// map не міняє орігінальний масив
const myArray = [1, 2, 3];
console.log(myArray);

const newArray = myArray.map((el) => {
  return el * 3;
});

console.log(newArray);
console.log(myArray);
