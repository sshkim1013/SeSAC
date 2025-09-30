import React from "react";

export default function LoginStatus({ isLogin, userName }) {
  return (
    <div>
      {/* 삼항 연산자로 표현 */}
      로그인 상태 : {isLogin ? "로그인 상태" : "비로그인 상태"}
      {/* button 태그 내부에 삼항연산자를 사용한다 */}
      {/* 조건식은 isLogin이 "참(true)이라면" 이다 */}
      {/* 만약 참이라면 문자열 "로그아웃" 생성 */}
      {/* 만약 거짓이면 문자열 "로그인" 생성 */}
      <button>{isLogin ? "로그아웃" : "로그인"}</button>
      {/* 만약 isLogin이 true라면 `${userName}님 환영합니다` 출력 */}
      {/* 만약 isLogin이 false라면 `로그인 해주세요` 출력 */}
      <p>{isLogin ? `${userName}님 환영합니다` : `로그인 해주세요`}</p>
    </div>
  );
}
