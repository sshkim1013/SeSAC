// 23-modern/optional.js

const user = {
  name: "치즈",
  address: {
    city: "서울",
  },
};

// 일반적인 속성 접근 문법 => ["속성명"] 또는 .속성명
// 옵셔널 체이닝 문법 => ?.속성명
console.log(user?.address); // { city: '서울' }
console.log(user?.address?.city); // 서울
console.log(user?.address?.country); // undefined

console.log(user?.contact?.mail); // undefined
console.log(user?.contact?.phone); // undefined
console.log(user?.contact); // undefined
