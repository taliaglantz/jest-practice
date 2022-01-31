//! HOW TO CREATE JEST TESTING ENVIRONMENT

//? 1. yarn init
//? 2. yarn 
//? 3. yarn add --dev jest
//? 4. create sum.js file and add function e.g.

// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

//? 5. create sum.test.js file and add test e.g. 

// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

//? 6. add following to package.json

// {
//   "scripts": {
//     "test": "jest"
//   }
// }

//? 7. run yarn test
