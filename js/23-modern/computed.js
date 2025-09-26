// 23-modern/computed.js

let key = "name";

const user = {
  // key는 문자열, 변수가 아니다!!
  key: "김수환", // 개발자의 의도 -> name: "김수환"
};
console.log(user); // 실제 결과 : { key: '김수환' }

// // 템플릿 리터럴도 사용 불가
// const user2 = {
//   `${key}`: "김수환",
// };

// 계산된 속성명(key)
// 변수를 속성의 key로 사용하고 싶을 때 사용하는 문법
const user3 = {
  // 변수를 대괄호로 감싸서 key로 표현
  [key]: "김수환", // name: "김수환"
};
console.log(user3); // 결과: { name: '김수환' }
