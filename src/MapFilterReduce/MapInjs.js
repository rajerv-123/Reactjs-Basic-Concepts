// arr = new Array(1, 2, 3, 4, 5);
// for (let i = 0; i < 6; i++) {
//   arr[i] = 3 * arr[i];
// }
// console.log(arr);

// let arr = ["bedroom", "kitchen", "Chair", "car"];
// console.log(arr[3]);

// arr.push("Mahindra SUV");
// console.log(arr);

// const index = arr.findIndex((item) => {
//   return item === "car";
// });
// console.log(index);

// const editArray = arr.map((item) => ({ text: item }));
// console.log(editArray);
/* 

The map() method in JavaScript is a higher-order function that is available for arrays.
 It is used to create a new array by transforming each element of the original array using a provided callback function. 
 The map() method does not modify the original array; instead,
 it returns a new array containing the results of applying the callback function to each element of the original array. */

// const newArray = arr.map((item) => ({ items: item }));
// console.log(newArray);

// let arr = [12,45,78,9,0,1,2,-1,80,77,10];
// let newArray = Math.max(...arr)
// console.log(newArray);

let arr = [50, 40, 12, 14, 85, 78, 998, 102, 11, 1, 3, 0, -1];
// let newArray = Math.min(...arr);
// console.log(newArray);

// let newArray = Math.floor(...arr);
// console.log(newArray);

//Sum of Array by using reduce fucntion in js
// let newSum = arr.reduce((accumulator, customElements) => {
//   return accumulator + customElements;
// });
// console.log(newSum);

// let newMultiply = arr.reduce((accumulator, customElements) => {
//   return accumulator * customElements;
// });
// console.log(newMultiply);

// let newArray = Math.min(...arr);
// console.log(newArray);

// let sumOfArray = arr.reduce((accumulator,inital)=>{
//     return accumulator + inital;
// })

// console.log(sumOfArray);

// let subOfArray = Math.min(...arr);
// console.log(subOfArray);

// console.log(arr.length);

// arr.push(22);
// arr.unshift(222);
// console.log(arr);

// function a() {
//   let b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// a();

// let newArray = arr.sort();
// console.log(newArray);

// let newArray = arr.shift(455);
// console.log(newArray);
// console.log(arr);
// let newArray = arr.unshift(69);
// console.log(newArray);
// console.log(arr);

// const data = {
//     name : " rajeev",
//     place : "Dhanbad",
//     state : "jharkhand"
// }

// console.log(data);
// const newData = JSON.stringify(data)
// console.log(data);

// let newArray = arr.reduce((total,index)=>{
//     return total + index;
// })
// console.log(newArray);

// let maxElement = Math.max(...arr);
// console.log(maxElement);

// let minElement = Math.min(...arr);
// console.log(minElement);

// let name = "kishan";

// let newArray  = arr.sort().reverse();
// console.log(newArray);

// let data = {
//   name: " Kishan",
//   age: 18,
//   place: "bangalore",
// };

// let newJsonArray = JSON.stringify(data);
// console.log(newJsonArray);

// let maxNumberByTwo = arr.map(num => num * 2);
// console.log(maxNumberByTwo);

// let evenNumber = arr.filter((num) => num % 2 == 0);
// console.log(evenNumber);

// let oddNumber = arr.filter((num) => num % 1 == 0);
// console.log(oddNumber);

// let newArray = arr.filter(num => num === Math.max(...arr));
// console.log(newArray);

// let newArray = arr.reduce((total,initail)=>{
//     return total + initail;
// })
// console.log(newArray);

// let newArray = arr.reduce((total, initial) => {
//   return total + initial;
// });
// console.log(newArray);

// let newArray = Math.max(...arr);
// console.log(newArray);

// let newArray = arr.filter((num) => num === Math.max(...arr));
// console.log(newArray);

// let newArray = arr.filter((num) => num === Math.max(...arr));
// console.log(newArray);

// let newArray = arr.filter(num => num === Math.min(...arr));
// console.log(newArray);

// let newArray = arr.reduce((total, initial) => {
//     return total + initial;
// });
// console.log(newArray);

// let newArray = arr.filter(num => num === Math.min(...arr));
// console.log(newArray);

// let a = 1;
// for(let i = 0; i <=10; i++){

// }

// let data = [
//   {
//     name: "rajeev",
//     palce: "dhanbad",
//     date: " 15/02/35",
//   },
//   {
//     name: "rajeev",
//     palce: "dhanbad",
//     date: " 15/02/35",
//   },
//   {
//     name: "rajeev",
//     palce: "dhanbad",
//     date: " 15/02/35",
//   },
// ];

// let myData = JSON.stringify(data);
// console.log(myData);

// let a = 34;
// let b = 32;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("a is :" , a);
// console.log("b is :" , b);

// let temp = a ;
// a  = b;
// b = temp;

// console.log("a is :" , a);
// console.log("b is :" , b);

// let myData = arr.filter(num => num >10)
// console.log(myData);

// let myData = Math.max(...arr);
// console.log(myData);

// let myData = arr.reduce((total ,initial) =>{
//     return total + initial;
// })

// console.log(myData);

// let myData = arr.sort().reverse();
// console.log(myData);

// let myData = arr.filter(num => num >= 10)
// console.log(myData);

// console.log(arr);
// let myData = arr.splice(2, 555);
// // console.log(myData);

// console.log(arr);
// let myData = arr.slice(1);
// console.log(myData);

// let newRes = arr.map((num) => num * 2);
// console.log(newRes);

// let filterData = arr.filter(num => num >= 90)
// console.log(filterData);

// let sumOfArray = arr.reduce((sum, num) =>{
//     return sum + num;
// })
// console.log(sumOfArray);

// let maxElement = Math.max(...arr);
// console.log(maxElement);

let a = 23;
let b = 43;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("value of a is : ", a);
// console.log("value of b is : ", b);


let temp = a;
a = b;
b = temp;

// let temp = a ;
// a  = b;
// b = temp;

console.log("value of a is : ", a);
console.log("value of b is : ", b);