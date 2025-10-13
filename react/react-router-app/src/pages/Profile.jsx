// Navigate 컴포넌트 불러오기
import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Profile() {
  // 사용자 로그인 상태 표시용 변수
  const isLogin = true;

  // 만약 로그인 상태가 아니라면, 홈("/")으로 리다이렉트
  if (isLogin === false) {
    // Navigate는 컴포넌트라서 return 내부에 있어야 한다.
    return <Navigate to="/"></Navigate>;
  }

  // useNavigate 훅
  // 하나의 "함수"를 반환한다.
  const navigate = useNavigate();

  return (
    <div>
      사용자 정보
      {/* onClick 속성에서 navigate 함수로 "/" 이동시키기 */}
      <button
        className="border p-2"
        onClick={() => {
          alert("홈페이지로 이동합니다.");
          // 페이지 이동 전, 특정 로직을 수행할 때 사용
          navigate("/");
        }}
      >
        홈페이지로 이동
      </button>
    </div>
  );
}
