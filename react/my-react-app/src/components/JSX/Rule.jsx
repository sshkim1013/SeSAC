import React from "react";

// export default : 모듈 기본 내보내기
// function : 함수
// return : 요소를 반환

// 파일 당 하나 존재하는 함수: 컴포넌트 === UI 조각
// 컴포넌트 함수는 HTML 요소(Element)를 반환한다!!!
export default function Rule() {
  // DOM API
  // const element = document.createElement("h1")
  // element["textContent"] = "App"

  // 규칙 1. 1개의 태그만 반환해야 한다!
  // div 태그 3개를 반환 - 오류 발생!
  // return (<div>1</div><div>2</div><div>3</div>);

  // div 태그 3개를 감싸는 1개의 Fragment 태그 반환
  // Fragment 태그: <> </>
  return (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      {/* 규칙 2. 모든 태그는 반드시 닫아야 한다! */}
      {/* <input> */}

      {/* input 태그 self-closing */}
      <input />

      {/* 규칙 3. 속성명(class, onclick, onsubmit)을 카멜 케이스로 작성해야 한다 */}
      {/* 카멜 케이스: 첫 단어는 소문자, 이후 단어의 시작 글자를 대문자로 쓰는 문법 */}
      {/* ex) onclick -> onClick, onsubmit -> onSubmit */}
      {/* class -> className */}

      <p className="font-bold text-5xl text-red-500">p 태그 {1 + 0}</p>

      {/* 규칙 4. style 속성의 값은 객체로 작성한다 */}
      <p style={{ fontSize: "3rem", color: "blue" }}>p 태그 2+0</p>
    </>
  );
}
