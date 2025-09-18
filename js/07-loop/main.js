// 반복문이 없는 코드
// 변수 number를 선언하고, 0을 할당
// 변수 number를 5번 출력
// 1씩 증가하면서
let number = 0;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);

console.log("---");

// 반복문으로 표현
for (let number2 = 0; number2 < 5; number2++) {
  console.log(number2);
}

console.log("---");

// 내가 어떤 코드를 5번 반복
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}번 실행`);
}

console.log("---");

// 숫자를 0부터 5까지 출력
for (let i = 0; i < 6; i++) {
  console.log(i);
}
