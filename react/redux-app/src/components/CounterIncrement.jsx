// counter 전역 상태의 count 값을 1 증가 시키는 버튼 컴포넌트

// counterSlice 에서 increment(상태 count + 1) 액션 생성자 함수
// increment : 액션 생성자 함수 -> 액션을 생성한다
import { increment } from "../store/counterSlice";

// useDispatch() 훅: dispatch 함수를 생성하는 훅
// dispatch 함수: 액션(action, 상태 변경 요청서)을 스토어로 보내는 함수
import { useDispatch } from "react-redux";
export default function CounterIncrement() {
  // dispatch 함수 생성
  const dispatch = useDispatch();

  function clickHandler() {
    // dispatch 함수의 인자로 action 생성자 함수를 전달
    // 액션 생성자 함수(increment)가 생성한 액션을 dispatch 함수로 스토어의 리듀서에 전달
    dispatch(increment());
  }

  return (
    <div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        1 증가
      </button>
    </div>
  );
}
