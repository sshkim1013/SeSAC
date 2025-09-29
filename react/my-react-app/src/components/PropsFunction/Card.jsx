import React from "react";

export default function Card({ userProps, onClickProps }) {
  return (
    <div>
      {/* button 태그의 onClick 속성에서 onClickProps 함수를 실행 */}
      <button onClick={() => onClickProps(userProps)}>클릭</button>
    </div>
  );
}
