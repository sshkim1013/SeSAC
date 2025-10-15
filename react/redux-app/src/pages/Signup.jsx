import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// signup 액션: 회원가입 비동기 네트워크 처리 액션
// resetIsSignup 액션: isSignup 상태 초기화(false) 액션
import { signup, resetIsSignup } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  // 사용자 입력 이메일 관리 상태
  const [email, setEmail] = useState("");
  // 사용자 입력 비밀번호 관리 상태
  const [password, setPassword] = useState("");
  // dispatch 함수
  const dispatch = useDispatch();
  // navigate 함수
  const navigate = useNavigate();
  // 전역 상태 isSignup 불러오기
  const { isSignup } = useSelector((state) => state["auth"]["isSignup"]);
  // 전역 상태 error 불러오기
  const error = useSelector((state) => state["auth"]["error"]);

  function handleSubmit(event) {
    event.preventDefault();
    // 비동기 처리 액션을 dispatch로 실행
    dispatch(signup({ email: email, password: password }));
  }

  // 회원가입이 성공을 했을 때 알림창을 띄우고
  // 홈페이지로 이동시키는 코드, useEffect 활용해서
  useEffect(() => {
    if (isSignup === true) {
      // 회원가입을 성공했다면
      alert("회원가입 성공. 메일함을 확인해주세요!");
      dispatch(resetIsSignup());

      navigate("/");
    }
  }, [isSignup, dispatch]);

  // 회원가입 form 구조화
  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event["target"]["value"]);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event["target"]["value"]);
          }}
        />
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
}
