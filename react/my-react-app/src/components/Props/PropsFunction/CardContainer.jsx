import React from "react";

import Card from "./Card";
import OnClick from "../../EventHandling/OnClick";

export default function CardContainer() {
  function handleClick(user) {
    console.log(user);
  }

  const user = {
    name: "치즈",
    age: 100,
  };

  return (
    <div>
      {/* Card 컴포넌트에 user 데이터 전달 */}
      {/* Card 컴포넌트에 handleClick 함수 전달 */}
      {/* 함수를 전달할 때는 함수 이름만 전달 */}
      <Card userProps={user} onClickProps={handleClick}></Card>
    </div>
  );
}
