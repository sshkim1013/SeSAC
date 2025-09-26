// 23-modern/short-property.js

let name = "김수환";
let age = 27;

// 단축 프로퍼티
// 가장 빈번하게 사용!!!!!

// 객체
const user = {
  name: name, // name: 김수환,
  age: age, // age: 27,
};

console.log(user); // { name: '김수환', age: 27 }

// 단축 속성
// 언제 사용 가능? -> 변수명을 Key로 사용할 때 / 변수명과 Key가 동일할 때
const user2 = {
  name, // name: name
  age, // age: age
};

console.log(user2); // { name: '김수환', age: 27 }
