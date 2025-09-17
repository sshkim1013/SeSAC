// 변수에 데이터를 할당(assign O, save X)

// 변수명 = 할당할 데이터
// "Hello World!" 라는 데이터를 저장한 공간의 이름이 message
// 변수 message에 "Hello World" 를 할당
message = "Hello, World!";

// = : 할당 연산자
console.log(message); // Hello, World!
console.log(message + " Hi"); // Hello, World! Hi
console.log(message + 1); // Hello, World!1

// 선언: 변수를 만드는 행위
// javascript 에서 선언과 할당을 분리 가능
// 변수 message2 선언
let message2;

// javascript 에서의 선언의 방식 - 2가지(원래는 3가지)

// 1. let
// 데이터의 재할당 가능(중요)
// 변수 message3에 "Hello variable"을 할당
let message3 = "Hello variable!";

// 변수 message3에 "Hello let variable"을 재할당
message3 = "Hello let variable!";
// let은 안붙이나요? -> let을 붙이면 선언
// let 키워드는 재선언 불가능
// let 변수 message4를 선언
let message4;
// let message4;  <- 에러 발생!

// 2. const
// 데이터의 재할당이 불가능(중요) -> 상수 라고 개발에서는 표현
// const 변수 message5 선언하고, "Hello Const" 할당
const message5 = "Hello Const";
message5 = "Hello, World!"; // TypeError: Assignment to constant variable.

// let Vs. const
// let : 변하는 데이터를 할당하는 변수
// const : 변하면 안되는 데이터를 할당하는 변수 선언 방식
