import { reset } from "../store/counterSlice";

import { useDispatch } from "react-redux";
export default function CounterReset() {
  // dispatch 함수 생성
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(reset());
  }

  return (
    <div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        초기화
      </button>
    </div>
  );
}
