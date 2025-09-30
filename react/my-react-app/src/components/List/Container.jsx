import React from "react";

import User from "./User";

export default function Container() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const userArray = [
    { id: 1, name: "치즈" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];

  return (
    <div>
      {/* array 배열을 map() 메서드로 반복 */}
      {array.map((number) => {
        // 원소를 li 태그에 감싸서 반환
        // 원소는 보간법을 사용해서 표현
        return <li>{number}</li>;
      })}

      <hr />

      {userArray.map((userElement) => {
        // User 컴포넌트 import 필수!!!
        // User 컴포넌트에 user 속성에 원소 user를 값으로 전달

        // 반복의 대상이 되는 요소에 key 속성과 값을 설정해야 한다.
        // 여기서 key 속성은 말그대로 key라는 이름의 속성이다.
        // 이때 key에 설정되는 값은 고유한 값이어야 한다.
        // 아래의 key라는 속성명은 "예약어"이다. 무조건 key라고 작성!!!
        // 반복 렌더링에서 key 속성의 역할은 동일하게 반복 생성된 컴포넌트를 구별(식별)하기 위한 속성
        return <User key={userElement["id"]} user={userElement}></User>;
      })}
    </div>
  );
}
