// 자식 경로들에 대해서 그들의 컴포넌트를 배치할 공간을 제공
import { NavLink, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const baseClass = `border-2 border-amber-300 p-2`;

  // NavLink 활성화 Class
  const activeClass = `border-2 border-red-900`;

  return (
    <div>
      <div className="flex gap-2">
        {/* JSX 보간법 + 템플릿 리터럴 + 화살표 함수 + 삼항 연산자 혼합 */}
        {/* 삼항 연산자는 표현식이라서 템플릿 리터럴이 적용 가능하다 */}
        <NavLink
          className={(isActive) => {
            `${baseClass} ${isActive ? activeClass : ""}`;
          }}
          to="/auth"
        >
          인증 홈페이지
        </NavLink>
        <NavLink
          className={(isActive) => {
            `${baseClass} ${isActive ? activeClass : ""}`;
          }}
          to="/auth/login"
        >
          로그인 페이지
        </NavLink>
        <NavLink
          className={(isActive) => {
            `${baseClass} ${isActive ? activeClass : ""}`;
          }}
          to="/auth/signup"
        >
          회원가입 페이지
        </NavLink>
        <NavLink
          className={(isActive) => {
            `${baseClass} ${isActive ? activeClass : ""}`;
          }}
          to="/"
        >
          홈페이지
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
