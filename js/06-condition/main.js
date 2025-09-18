// if 조건문의 기본 구조
// 여러 줄 주석: /*  */
/*
if (조건식) {
  // 조건식이 참이면 실행되는 코드 영역
}
*/
if (5 > 1) {
  console.log("5는 1보다 크다");
}

/* if ~ else if 조건문 기본 구조
if (조건식1) {
} else if (조건식2) {
  // 조건식2는 조건식1이 거짓(false)일 때 평가 된다.
} else if (조건식3) {
  // 조건식3은 조건식2가 거짓(false)이라면 평가 된다.
}
*/
if (5 > 10) {
  console.log("5는 10보다 크다");
} else if (5 > 7) {
  console.log("5는 7보다 크다");
} else if (5 > 5) {
  console.log("5는 3보다 크다");
} else if (5 > 3) {
  console.log("5는 3보다 크다"); // 출력
}

/* if ~ else if ~ else 조건문 기본 구조
if (조건식1) {
} else if (조건식2) {
} else {
  else 는 조건식이 없다.
  대신 위의 모든 조건식이 거짓(false)이면 실행 된다.
  else 아래에는 또 다른 else if 나 else 가 존재할 수 없다.
}
---
if (조건식) {
} else {
  조건식이 거짓이면 실행
}
*/

// 지시문: 변수 number 를 선언하고, 숫자 1을 할당한다.
// number 가 0보다 크면 "양수" 를 콘솔에 출력
// number 가 0보다 크지 않다면 "음수" 를 콘솔에 출력
// if ~ else 문으로 구현
let number = -1;
if (number > 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// 지시문: 변수 number2 를 선언하고, 숫자 0을 할당한다.
// 변수 number2 가 0보다 크면, "양수"를 출력
// 변수 number2 가 0보다 작으면, "음수"를 출력
// 그런데 모두 아니라면, "0" 출력
let number2 = 0;
if (number2 > 0) {
  console.log("양수");
} else if (number2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}

// 중첩 조건문
// 조건문을 중첩하는 조건문

// 변수 score를 선언하고, 숫자 75를 할당한다
// 만약 변수 score가 90 이상이라면
// 그런데 만약 변수 score가 90 미만 그리고(&&), 80 이상이라면
// 그런데 만약 변수 score가 80 미만 그리고(&&), 70 이상이라면
// 그런데 만약 변수 score가 70 미만 그리고(&&), 60 이상이라면
// 그런데 모두 아니라면
let score = 75;
if (score >= 90) {
} else if (score < 90 && score >= 80) {
} else if (score < 80 && score >= 70) {
} else if (score < 70 && score >= 60) {
} else {
}

// 삼항 연산자 표현식
// 표현식: "데이터를 생성"하는 코드

// 조건식은 무조건 참(true) / 거짓(false) 데이터 중 하나를 생성
// (조건식) ? 조건식 평가 결과가 참일 때의 데이터 : 조건식 평가 결과가 거짓일 때의 데이터
const answer = 2 > 1 ? "2는 1보다 크다" : "2는 1보다 크지 않다";
console.log(answer);

let isLoggedIn = true;
const user = isLoggedIn ? "접속" : "비접속";
console.log(user);
