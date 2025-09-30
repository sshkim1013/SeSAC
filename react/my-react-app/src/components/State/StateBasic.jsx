// 상태(State)를 사용하기 위한 모듈
import { useState } from "react";

// 리액트 훅(Hook)
// JavaScript의 함수와 유사한 개념이지만 함수는 아님.
// 함수: 특정 기능을 수행하는 코드 "뭉치"
// 훅: 리액트에서 특정 동작을 수행하는 "도구"
// useState 훅: 리액트에서 상태 관리를 수행하는 "도구"
export default function StateBasic() {
  // useState 훅 사용
  // useState 훅은 배열 [ ] 을 생성한다.
  // 배열에는 2개의 원소가 존재
  // [ 상태 데이터를 저장할 "변수", 상태 데이터를 설정(변경)할 "함수" ]

  // 배열의 구조 분해 할당을 활용.
  /**
   * let array = [1, 2]
   * const [one, two] = array
   * 위치에 따라 판단.
   * one === 1
   * two === 2
   */

  // const [one, two] = [ 상태 데이터를 저장할 "변수", 상태 데이터를 설정(변경)할 "함수" ]
  const [somethingState, setSomethingState] = useState(); // 방법 1
  const [something, setSomething] = useState(); // 방법 2

  // 문자열 데이터로 관리하는 상태(State)
  // string은 상태 데이터를 저장할 변수
  // setString은 상태 데이터를 변경할 함수
  const [string, setString] = useState("문자열");
  // 초기값: 생성될 때 저장할 첫 값

  // 배열 데이터를 관리하는 상태
  // array : 상태 데이터를 저장할 변수
  // setArray : 상태 데이터를 변경할 함수
  const [array, setArray] = useState([1, 2, 3]);

  function handleClick() {
    // array.push(4);   잘못된 코드: 상태 변수에 직접 접근했기 때문!!!

    // 1. 스프레드 연산자를 통해 4를 추가한 새로운 배열을 변수 newArray에 할당
    const newArray = [...array, 4];

    // 새로운 상태 데이터: newArray
    setArray(newArray);

    console.log("상태 변경");
    // 상태 데이터를 변경하는 코드
    // 속성에 직접 접근해서 상태 데이터를 수정해서는 절대절대절대 안된다!!!!!

    // 변경할 데이터를 상태 변경 함수에 전달해야 한다
    setString("상태 변경");
  }

  return (
    <div>
      {/* button 태그의 onClick 속성에서 handleClick() 함수 실행 */}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        원소 추가
      </button>
      {array.map((number) => {
        return <li>{number}</li>;
      })}
    </div>
  );
}

// 상태에 저장된 메모리 주소가 바뀌었을 때 리액트는 화면을 다시 그린다.
// 리액트는 상태 변수에 저장된 메모리 주소가 그대로라면 변경이 없는 것과 동일하다.
// 배열 안에 몇개의 요소가 있든간에 일일이 비교하지 않아도 되고 그저 메모리 주소가 바뀌었는지만 확인하면 된다.
