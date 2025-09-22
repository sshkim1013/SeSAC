// 모듈을 불러오기
// import & from 조합

// from : 어디서 불러올 것이냐
// import : 무엇을 불러올 것이냐
// import {함수명1, 함수명2, ... } from ...
import { add, subtract, multiply, divide } from "./math.js";

console.log(add(1, 2)); //3
console.log(subtract(1, 2)); // -1
console.log(multiply(1, 2)); // 2
console.log(divide(1, 2)); // 0.5

// console.log(PI); // 3.14

// 하나만 불러오기(Default Export)
// 내가 "함수의 이름을 결정"할 수 있다!

// 대표성을 띤다는 특징!
import calculator from "./calculator.js";
console.log(calculator);
/*
{
  add: [Function: add],
  subtract: [Function: subtract],
  multiply: [Function: multiply],
  divide: [Function: divide]
}
*/
console.log(calculator.add(1, 2)); // 3
