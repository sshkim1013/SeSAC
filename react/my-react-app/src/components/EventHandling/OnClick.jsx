import React from "react";

export default function OnClick() {
  // 클릭 이벤트 핸들링 함수
  // 관례적으로 핸들링 함수명은 [handle이벤트명] 으로 작성
  // ex) handleClick
  // 매개변수가 없는 함수
  function handleClick() {
    alert("클릭!");
  }

  // 매개변수가 있는 함수
  function handleParamClick(param) {
    alert(param);
  }

  return (
    <div>
      <button
        className="cursor-pointer border-2 p-2 bg-green-300"
        onClick={() => {
          handleParamClick("Hello, World!");
        }}
      >
        매개변수가 있는 함수 클릭
      </button>
      {/* 이벤트 속성은 "카멜 케이스"로 작성 */}
      {/* onclick (X) / onClick (O) */}
      {/* JSX 보간법 { } 을 활용해서 함수를 호출 */}
      <button
        className="cursor-pointer border-2 p-2 bg-blue-300"
        onClick={() => {
          handleClick();
        }}
      >
        화살표 함수 클릭
      </button>
      <button onClick={handleClick}>함수 참조 클릭</button>
    </div>
  );
}
