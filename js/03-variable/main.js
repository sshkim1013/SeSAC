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

// javascript 에서의 변수 선언의 방식 - 2가지(원래는 3가지)

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
// message5 = "Hello, World!"; // TypeError: Assignment to constant variable.

// let Vs. const
// let : 변하는 데이터를 할당하는 변수
// const : 변하면 안되는 데이터를 할당하는 변수 선언 방식

// 대소문자 구분하기 때문에 두 변수는 다른 변수
let message6;
let MESSAGE6;

// 카멜 케이스 적용 전
let hellomessage;
// 카멜 케이스 적용 후
let helloMessage;

// 의미 없는 변수명
let a = 1;
// 의미 있는 변수명
let number = 1;

// 템플릿 리터럴
// 문자열 사이에 변수를 삽입해서 문자열을 생성하는 방법
// 1. 문자열을 백틱으로 표현
// 2. 변수 삽입 위치에 기호 ${변수} 를 사용
let name = "김수환";
let greet = `안녕하세요, ${name} 입니다.`;
console.log(greet);

// var (절대 사용 X)
// 재선언도 가능하고, 재할당도 가능

// 재선언이 가능한 게 좋지 않은 이유
// 1. 기존 변수에 할당된 데이터가 의도치 않게 삭제
var message7 = "비밀번호";
var message7 = 1234;
console.log(typeof message7); // type: number

// 2. 변수를 선언하기 전에 사용이 가능
// 내부적으로 다음과 같은 과정이 발생.
// var message 라는 변수가 최상단에 선언 -> 이후 값이 할당.
console.log(message8); // undefined
var message8;
var message8;
