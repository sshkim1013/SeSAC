// 함수 선언식
function 함수명() {}

// 일급 객체의 특성 3가지
// 1. 변수에 할당 가능
// 2. 반환 값으로 사용 가능
// 3. 인자로 전달 가능

// 1. 변수에 할당 가능
const functionExpression = function () {};
const arrayFunction = () => {};

// 2. 함수의 반환 값으로 사용 가능

function calculator(operator) {
  // 화살표 함수를 할당받은 변수 add
  // 1. 변수에 할당이 가능하다
  const add = (n1, n2) => {
    return n1 + n2;
  };

  if (operator === "더하기") {
    // 화살표 함수를 반환값으로 지정
    // 2. 함수의 반환값으로 사용 가능하다
    return add;
  }
}

// 3. 함수의 인자로 전달 (콜백 함수)
// calculator2
// 특정 연산을 수행하고, 결과를 출력하는 함수
function calculator2(operatorFunction, n1, n2) {
  // 연산 함수를 수행
  const result = operatorFunction(n1, n2);

  // 연산 함수의 결과를 출력
  // 아래에 수십 수백 줄 코드
  console.log(`연산 결과 : ${result}`);
}

// 더하기 연산 함수
const add = (a, b) => {
  return a + b;
};

// 뺴기 연산 함수
const sub = (a, b) => {
  return a - b;
};

// 곱하기 연산 함수
const multi = (a, b) => {
  return a - b;
};

// 곱하기 연산 함수
const devid = (a, b) => {
  return a - b;
};

calculator2(add, 1, 2);
calculator2(sub, 1, 2);
