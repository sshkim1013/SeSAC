import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // 사용자 입력 이메일 관리 상태
  const [email, setEmail] = useState("");
  // 사용자 입력 비밀번호 관리 상태
  const [password, setPassword] = useState("");
  // dispatch 함수
  const dispatch = useDispatch();
  // navigate 함수
  const navigate = useNavigate();

  // token 상태는
  // 로그인을 성공하면 값이 존재
  // 로그인을 안했다면 값이 null
  const token = useSelector((state) => {
    return state["auth"]["token"];
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ email: email, password: password }));
  }

  useEffect(() => {
    if (token) {
      alert("로그인 상태입니다.");
      console.log(token);
      navigate("/");
    }
  }, [token]);

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
        <input
          type="submit"
          value="로그인"
          onChange={(event) => {
            setEmail(event["target"]["value"]);
          }}
        />
      </form>
    </div>
  );
}
