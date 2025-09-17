// 형변환
// 명시적 형변환: 개발자가 한 것
// 암시적 형변환: JS 엔진(번역기)이 자동으로 한 것

// 문자열로의 명시적 변환
// String() 함수: 문자열로 변환하는 도구
// 함수 : 프로그래밍 언어의 특정 기능을 수행하는 도구

// String(데이터) / String(변수)
console.log(String(123)); // 숫자형 -> 문자열
console.log(String(123) === "123"); // true

// true, undefined, null을 문자열로 형변환하는 코드 작성 후 출력
console.log(typeof String(true)); // string
console.log(typeof String(undefined)); // string
console.log(typeof String(null)); // string

// 숫자형 명시적 형변환
// Number() 함수: 숫자형으로 변환하는 도구
// Number(데이터) / Number(변수)
// 문자열 "123" -> 숫자형 123
console.log(typeof Number("123")); // number

// 불리언 명시적 형변환
// 불리언 데이터: true(1), false(0)
// Boolean() 함수: 불리언으로 형변환하는 도구
console.log(Boolean("김수환"));

// 불리언 형 변환 규칙
// 각 자료형마다 최소 1개는 거짓(false)으로 변환된다.
// false 가 아닌 데이터는 모두 참(true)으로 변환된다.
// 숫자 -> 불리언 형변환
console.log(Boolean(-1)); // true
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(99999)); //true

// 문자열 형 변환
console.log(Boolean("")); // false
console.log(Boolean("     ")); // true
