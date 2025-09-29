export default function OnClick() {
  // 이벤트 핸들러 함수 정의
  function handleClick(event) {
    alert("동작 완료!");
  }

  return (
    <div>
      {/* 아래 버튼을 클릭했을 때 handleClick 함수가 실행되도록 코드를 작성 */}
      <button
        className="w-5l border-2 border-amber-500 p-2 m-2"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        클릭
      </button>
    </div>
  );
}
