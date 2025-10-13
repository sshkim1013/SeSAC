import { Link } from "react-router-dom";

export default function AuthHome() {
  return (
    <div>
      인증 홈페이지
      <div className="flex flex-col gpa-4">
        {/* index.js에서 부모 경로가 /auth 로 시작하기 때문에 아래처럼 to 속성을 설정해야 한다. */}
        <Link to="/auth/signup">회원가입 페이지</Link>
        <Link to="/auth/login">로그인 페이지</Link>
      </div>
    </div>
  );
}
