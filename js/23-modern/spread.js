// 23-modern/spread.js

const obj1 = {
  name: "김수환",
  age: 27,
  job: "개발자",
  location: "서울",
  country: "대한민국",
};

// 객체 복사
const obj2 = obj1;
console.log(obj1); // { name: '김수환', age: 27, job: '개발자', location: '서울', country: '대한민국' }
console.log(obj2); // { name: '김수환', age: 27, job: '개발자', location: '서울', country: '대한민국' }

// 문제점
obj2["location"] = "부산";
console.log(obj2["location"]); // 부산
console.log(obj1["location"]); // 부산

// 해결 방법: 객체 내부의 값만 복사
// ... 스프레드 연산자를 활용한 복사
const obj3 = { ...obj1 }; // obj1의 "속성을 펼쳐서" "새로운 객체"를 생성
console.log(obj3); // { name: '김수환', age: 27, job: '개발자', location: '부산', country: '대한민국' }
console.log(obj1); // { name: '김수환', age: 27, job: '개발자', location: '부산', country: '대한민국' }

// 속성 값 변경 후 결과 확인
obj3["name"] = "홍길동";
console.log(obj3["name"]); // 홍길동
console.log(obj1["name"]); // 김수환

// ---------------------------------------------

// 객체의 속성을 수정하면서 새로운 객체를 생성

// 새로운 객체를 생성하고, age 속성을 수정
obj4 = { ...obj1 };
obj4["age"] = 21;

// 편한 방법
// age 속성을 수정한 새로운 객체를 생성
obj5 = { ...obj1, age: 21, planet: "지구" };
console.log(obj5);
// {
//   name: '김수환',
//   age: 21,
//   job: '개발자',
//   location: '부산',
//   country: '대한민국',
//   planet: '지구'
// }

// ---------------------------------------------

// 배열 데이터의 스프레드 연산자
let arr1 = [1, 2, 3, 4, 5];

// arr1의 메모리 주소를 arr2에 그대로 할당
let arr2 = arr1;
arr2[0] = 0;
console.log(arr1); // [ 0, 2, 3, 4, 5 ]
console.log(arr2); // [ 0, 2, 3, 4, 5 ]

// 스프레드 연산자를 활용한 복사
// 스프레드 연산자로 새로운 배열을 생성해서 arr3에 할당
let arr3 = [...arr1];
arr3[0] = 7;
console.log(arr3); // [ 7, 2, 3, 4, 5 ]
console.log(arr1); // [ 0, 2, 3, 4, 5 ]

// ---------------------------------------------

// 스프레드 연산자를 활용한 원소를 추가
let arr4 = [...arr1, 6, 7, 8];
console.log(arr4);
// [
//   0, 2, 3, 4,
//   5, 6, 7, 8
// ]

// ---------------------------------------------

// "리액트"에서는 스프레드 연산자를 어떻게 사용하는가?

// 원소가 객체인 배열
// 객체를 저장한 배열
let objectArr = [{ name: "김수환", age: 27 }];

// 새로운 객체를 추가한 "새로운 배열"을 생성
let newObjectArr = [...objectArr, { name: "은하철도", age: 999 }]; // 리액트에서 사용 O
objectArr.push({ name: "은하철도", age: 999 }); // 리액트에서 사용 X

// 결과는 같지만 서로 완전히 다른 주소의 배열이다.
console.log(objectArr); // [ { name: '김수환', age: 27 }, { name: '은하철도', age: 999 } ]
console.log(newObjectArr); // [ { name: '김수환', age: 27 }, { name: '은하철도', age: 999 } ]
