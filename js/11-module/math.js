// 외부 파일(모듈)로 분리할 코드
// 더하기
function add(n1, n2) {
  return n1 + n2;
}

// 빼기
function subtract(n1, n2) {
  return n1 - n2;
}

// 곱하기
function multiply(n1, n2) {
  return n1 * n2;
}

// 나누기
function divide(n1, n2) {
  return n1 / n2;
}

// 상수
// const PI = 3.14;

// export { 함수명1, 함수명2, ... }
export { add, subtract, multiply, divide };
