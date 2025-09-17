// 논리연산저
// 논리형(불리언형, true/false)을 기반으로한 연산자
const trueData = true;
const falseData = false;

// &&(AND)
// 두 개의 boolean형 데이터가 모두 참이면 참(true) 생성
// 두 데이터 중 하나라도 거짓이면 거짓(false) 생성

// 템플릿 리터럴에는 변수 뿐만 아니라 표현식을 삽입 가능
// 표현식: 데이터를 생성하는 코드(ex. 연산)
console.log(`true && true -> ${trueData && trueData}`);
console.log(`true && false -> ${trueData && falseData}`);

// ||(OR)
// 논리형 데이터가 하나라도 참이면 참(true) 생성
// 논리형 데이터가 모두 거짓이면 거짓(false) 생성
console.log(`true || false -> ${trueData || falseData}`);
console.log(`false || false -> ${falseData || falseData}`);

// !(NOT)
// 1개의 논리형 데이터만 필요
// 논리형 데이터가 거짓이면 참(true) 생성
// 논리형 데이터가 참이면 거짓(false) 생성
console.log(`!true -> ${!trueData}`);
console.log(`!false -> ${!falseData}`);

// 같다 == Vs. === / 다르다 != Vs. !==

// == / !=
// 동등 비교
// "값(데이터)만" 비교
// 서로 다른 자료형을 비교하면 자료형을 동일하게 변환
// 절대 절대 절대 사용 금지!!!!!
const number = 1;
const str = "1";

const bool1 = number == str;
console.log(bool1); // true

// === / !==
// 동등 비교
// "데이터"와 "데이터의 자료형"을 비교
const bool2 = number === str;
console.log(bool2); // false
