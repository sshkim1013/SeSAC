// 전역 상태를 불러와서 화면에 표시하는 컴포넌트

// useState와 유사
// 전역 상태를 불러오는 훅
import { useSelector } from "react-redux";

import { useEffect } from "react";
export default function Counter() {
  const counter = useSelector((state) => state["counter"]);

  const count = useSelector((state) => state["counter"]["count"]);

  // useEffect(() => {
  //   // (임시) 전역 상태 데이터 확인용 코드
  //   console.log(counter);
  // }, []);

  return <div>전역 상태 count의 값: {count}</div>;
}
