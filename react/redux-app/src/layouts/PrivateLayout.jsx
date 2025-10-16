// 해당 Layout은 로그인 사용자만 접근 가능한 Layout이다.

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateLayout() {
  // 전역 상태 Token 불러오기
  const token = useSelector((state) => state["auth"]["token"]);

  // 토큰이 없으면 즉, 로그인을 안했으면
  if (!token) {
    // 로그인 경로로 이동
    return <Navigate to="/login" replace></Navigate>;
  } else {
    // 토큰이 있으면 중첩된 자식 컴포넌트 렌더링
    return <Outlet></Outlet>;
  }
}
