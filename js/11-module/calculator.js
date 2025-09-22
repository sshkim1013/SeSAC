// 가장 기본적인 형태의 하나 내보내기(Default Export) 방식
// 여러 개의 함수(메서드)가 정의된 객체를 생성해서 내보내기

import { multiply, subtract } from "./math.js";

// 객체: 중괄호로 표현되는 속성의 모음
const calObj = {
  add: function (n1, n2) {
    return n1 + n2;
  },
  subtract: function (n1, n2) {
    return n1 - n2;
  },
  // multiply 함수
  multiply: function (n1, n2) {
    return n1 * n2;
  },
  // divide는 화살표 함수로 표현해보기
  divide: (n1, n2) => {
    return n1 / n2;
  },
};

// 하나만 내보내기(Default Export)
export default calObj;
