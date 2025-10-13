// Link 컴포넌트는 <a> 태그를 대체한다.
// 외부로 나가는 링크가 아닌 이상 <a> 태그를 사용 X.
// 외부: 아예 다른 사이트의 페이지.

// NavLink : 현재 URL과 to="" 의 속성이 일치하는지 판단.
// 일치하면 특정 스타일을 적용할 수 있다.
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <NavLink to="/">홈</NavLink>
      <br />
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "text-blue-500 font-bold text-5xl" : "";
        }}
      >
        소개
      </NavLink>
      <br />
      <NavLink to="/profile">프로필</NavLink>
    </div>
  );
}
