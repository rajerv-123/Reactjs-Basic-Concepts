let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Example for Map function
// let newArray = arr.map((num) => num + 20);
// console.log(newArray);

// Filter fuction example

// let maxNumber = arr.filter(num => num > 70);
// console.log(maxNumber);

// Example for Reduce

// let sumOfArray = arr.reduce((initial, numbers) => {
//   return initial + numbers;
// });

// console.log(sumOfArray);

// Example for Sprade Operators
// let maxNumber = Math.min(...arr);
// console.log(maxNumber);

let a = 10,
  b = 40;

// Without Third Veriable
// a = a + b;
// b = a - b;
// a = a - b;

// console.log("Value of a is ", a);
// console.log("Value of b is ", b);

// let temp = a;
// a = b;
// b = temp;

// console.log("Value of a is ", a);
// console.log("Value of b is ", b);

let data = {
  name: "Rajeev",
  age: "22",
  address: "dhanbad",
  state: "jharkhand",
};
console.log(...data);
