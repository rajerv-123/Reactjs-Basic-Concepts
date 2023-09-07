// arr = ["munna","munni","munnia","chunia","bunia","cunia"];
// arr2 = ["shayam","shundar","gyan","Prag","param","sundar"];
// console.log(...arr);
// console.log(...arr2);

const array1 = {
    "name":"Areteminds",
    "type":"IT",
}
const arrayObject ={
    "name":"Mohan",
    "address":"dhanbad",
    "job location ":"Bangalore",
    "salary":"15/m",
    ...array1
}
console.log(arrayObject);

/*The spread operator (`...`) in JavaScript is a syntax feature that allows you to expand elements of an iterable (such as an array, string, or object) into various contexts, such as function arguments, array literals, and object literals. It's a versatile tool for copying, combining, or spreading elements in various situations. Here's how it works:

1. **Copying Arrays:**

   You can use the spread operator to create a new array with the contents of an existing array:

   ```javascript
   const originalArray = [1, 2, 3];
   const newArray = [...originalArray];
   console.log(newArray); // Output: [1, 2, 3]
   ```

2. **Concatenating Arrays:**

   The spread operator can also be used to combine multiple arrays:

   ```javascript
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];
   const combinedArray = [...array1, ...array2];
   console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
   ```

3. **Passing Function Arguments:**

   The spread operator can spread elements of an array as individual arguments to a function:

   ```javascript
   function add(a, b, c) {
     return a + b + c;
   }

   const numbers = [1, 2, 3];
   const result = add(...numbers);
   console.log(result); // Output: 6
   ```

4. **Creating Copies of Objects:**

   You can use the spread operator to create shallow copies of objects:

   ```javascript
   const originalObject = { x: 1, y: 2 };
   const copiedObject = { ...originalObject };
   console.log(copiedObject); // Output: { x: 1, y: 2 }
   ```

5. **Merging Objects:**

   The spread operator can merge properties of multiple objects into a new object:

   ```javascript
   const obj1 = { x: 1, y: 2 };
   const obj2 = { y: 3, z: 4 };
   const mergedObject = { ...obj1, ...obj2 };
   console.log(mergedObject); // Output: { x: 1, y: 3, z: 4 }
   ```

6. **String to Array:**

   You can use the spread operator to convert a string into an array of characters:

   ```javascript
   const str = "hello";
   const charArray = [...str];
   console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']
   ```

The spread operator is a powerful and concise way to work with iterable elements in JavaScript. 
However, keep in mind that it performs shallow copies, so nested structures might still share references. */