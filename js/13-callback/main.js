// 배열 고차 메서드
// 배열 원소에 콜백 함수를 순차적(반복을 통해)으로 적용하는 메서드

// 각 원소에 + 1을 한 결과를 출력
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((element) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});

console.log("===");

// 각 원소 중 2로 나눴을 때 나머지가 0인 원소만 출력
numbers.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});

console.log("===");

// ---
// map()을 활용해서 곱하기 2를 한 원소를 모아서 새 배열
// 콜백 함수로부터 생성된 반환 값을 모아서 새로운 배열을 생성: map() 사용!
// map()은 표현식이다!!!
const newArr = numbers.map((element) => {
  return element * 2;
});
console.log(newArr);

// reduce()
// 배열의 누적을 반환
const numbers10 = [1, 2, 3, 4, 5];
const result = numbers10.reduce((accValue, currElement) => {
  // accValue : 이전 반복동안 반환된 값을 누적한 데이터
  // currElement : 현재 원소

  // 반환 값들이 누적된다.
  return accValue + currElement;
  // accValue + currElement
  // ------------------------
  // 0        + currElement(1) => accValue = 1
  // 1        + currElement(2) => accValue = 3
  // 3        + currElement(3) => accValue = 6
  // 6        + currElement(4) => accValue = 10
  // 10       + currElement(5) => accValue = 15
});
console.log(result); // 15

console.log("===");

// sort()
// 배열을 정렬하는 고차 메서드
// 원소를 2개씩 비교하며 정렬
// 원본 배열을 수정
const numbers11 = [2, 6, 1, 9, 7];

// a b
// 2 6
numbers11.sort((a, b) => {
  // 정렬 기준
  // 반환 값이 양수라면 a가 뒤로 배치
  // 반환 값이 음수라면 a가 앞으로 배치
  // 반환 값이 0이라면 같다

  // 오름차순 축약
  return a - b;

  // 내림차순 축약
  return b - a;

  // 오름차순
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(numbers11); // [ 1, 2, 6, 7, 9 ]
