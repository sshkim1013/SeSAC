import { Link, Outlet } from "react-router-dom";

// 경로 상수 객체 불러오기
import PATHS from "../constants/paths";

export default function RootLayout() {
  return (
    <div>
      <div className="flex gap-4 p-2 border-2 border-gray-500">
        <Link to="/">홈페이지</Link>
        {/* 절대 경로로 표현한 경로(path) */}
        {/*  */}
        <Link to={PATHS["ROOT"]["ABOUT"]}>소개 페이지</Link>
        <Link to={PATHS["ROOT"]["PROFILE"]}>사용자 정보 페이지</Link>
        <Link to={PATHS["AUTH"]["INDEX"]}>인증 페이지</Link>
        <Link to={PATHS["ROOT"]["POSTS"]}>게시글 목록 페이지</Link>
      </div>
      <Outlet />
    </div>
  );
}
