// 22-this/main.js
// this 키워드

// 일반 함수에서의 this 키워드
// 전역(Global) 객체(Object)를 나타낸다(가리킨다, 참조한다)
// 사실 일반 함수에서의 this 키워드는 사용 의미가 없다 / Global은 JavaScript 자체에서 관리하기 때문.
function func() {
  console.log("함수");
  console.log(this);
}
func();

// 중괄호로 표현되는 자료형
// 객체의 특징 : key-value 속성으로 구성
// 함수도 value가 될 수가 있음. 이러한 함수를 메서드라고 한다
// 즉, 객체에 포함된 함수는 메서드라고 한다.
const obj = {
  name: "홍길동",
  age: 20,
  // 함수명이 없다 -> 함수 표현식
  // key가 func 이고, value는 함수
  func: function () {
    console.log(this);
    // 여기서 this는 객체 obj와 동일하다
  },
};

// obj 객체의 func 메서드를 실행(호출)
obj.func(); // { name: '홍길동', age: 20, func: [Function: func] }

const user = {
  name: "홍길동",
  age: 20,
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

user.greet();

// 화살표 함수로 표현한 메서드는 함수 선언식(표현식, function 키워드를 사용한 함수)과 작동 방식이 다르다.
const user2 = {
  name: "홍길동",
  age: 20,
  // 화살표 함수로 메서드를 표현
  greet: () => {
    console.log(this);
  },
};
// function 키워드로 표현한 메서드 결과 : { name: '홍길동', age: 20, func: [Function: func] }
// 화살표 함수로 표현한 메서드 결과 : {} (빈 객체)
user2.greet();
console.log(this); // 함수가 아닌 곳에서 실행한 this : {} (빈 객체)

const user3 = {
  name: "홍길동",
  age: 20,
  // 화살표 함수로 메서드를 표현
  greet: function () {
    console.log(this); // 결과: { name: '홍길동', age: 20, greet: [Function: greet] }

    // function 키워드 메서드 내부의 화살표 함수의 this
    const arrowFunc = () => {
      console.log(this);
    };
    arrowFunc(); // 화살표 함수도 내부에서 호출을 해야 한다
  },
};
user3.greet(); // 결과: { name: '홍길동', age: 20, greet: [Function: greet] }
