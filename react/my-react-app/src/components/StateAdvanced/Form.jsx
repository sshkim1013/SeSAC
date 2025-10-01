import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    username: "",
    age: "",
    email: "",
  });

  // 이벤트 핸들러 함수
  function handleChange(event) {
    // target : 이벤트가 발생한 요소의 정보
    const target = event["target"];
    console.log(target);

    // target 객체에서 name 속성과 value 속성 꺼내서 출력
    const { name, value } = target;
    console.log(name, value);

    // 새로운 form 객체 생성
    // 계산된 속성명을 사용
    // name 변수가 가질 수 있는 데이터 : "username", "age", "email"
    // 조건문을 사용하지 않아도 된다!
    const newForm = { ...form, [name]: value };

    // form 상태 변경(업데이트, 리렌더링)
    setForm(newForm);
  }

  return (
    <div>
      <form>
        {/* 3개의 input 요소의 값(value)을 상태로 관리 */}
        {/* input 요소의 value 속성 === 사용자가 입력한 값 */}
        {/* 왼쪽 value는 속성 / 오른쪽 {변수}는 상태 변수를 의미 */}
        <input
          className="border-2"
          type="text"
          name="username"
          value={form["username"]}
          // 화살표 함수의 event 매개변수를
          onChange={(event) => {
            handleChange(event); // handleChange() 함수에 인자로 전달
          }}
        />
        <input
          className="border-2"
          type="number"
          name="age"
          value={form["age"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="email"
          name="email"
          value={form["email"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
}
