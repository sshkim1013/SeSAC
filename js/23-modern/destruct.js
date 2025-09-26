// 23-modern/destruct.js
// 구조 분해 할당

const object = {
  name: "김수환",
  age: 27,
  name2: "김수환",
  age2: 27,
};

// 구조 분해 할당을 활용하지 않은 경우
// 속성을 개별 변수에 할당
let name = object["name"];
let age = object["age"];

// 구조 분해 할당을 활용하는 경우
// 객체 생성의 반대 -> let { 변수1, 변수2 } = 객체;
const { name2, age2 } = object;
console.log(name); // 김수환
console.log(name2); // 김수환

const object2 = {
  id: 1,
  title: "MacBook Air M1",
  price: 650000,
};

// object2에서 title과 price 속성의 값만 필요
// 구조 분해 할당 활용
const { title, price } = object2;
console.log(title); // MacBook Air M1
console.log(price); // 650000

// --------------------------------------------------

// 객체를 인자로 전달 받는 함수
function func(object) {
  // 구조 분해 할당으로 변수에 속성 값(value)을 저장
  const { name, age } = object;
  console.log(`Hello, I'm ${name}, I'm ${age}`);
}

// 매개변수에 구조 분해 할당을 활용
function func2({ name, age }) {
  console.log(`Hello, I'm ${name}, I'm ${age}`);
}

const user = {
  name: "김수환",
  age: 27,
};
func(user); // Hello 김수환, I'm 27
func2(user); // Hello 김수환, I'm 27

// --------------------------------------------------

// 배열 구조 분해 할당
const array = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = array;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5

// 필요한 원소만 할당
const [, second, , fourth] = array;
console.log(second); // 2
console.log(fourth); // 4

// ... 연산자로 나머지 원소 할당
const [f, s, ...rest] = array;
console.log(f); // 1
console.log(s); // 2
console.log(rest); // [3, 4, 5]
