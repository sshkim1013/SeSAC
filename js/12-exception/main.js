// 예외 처리

try {
  // try 코드 블록
  // 원래 실행할 코드
  // 오류 발생 코드
  console.log(number);
} catch (error) {
  // catch 코드 블록
  // try 코드 블록에서 오류가 발생할 때 실행될 코드
  // error 매개변수: 오류의 정보를 저장하고 있는 객체
  console.log(error.name);
  console.log(error.message);
} finally {
  // finally 코드 블록
  // try ~ catch와 상관 없이 무조건 실행되는 코드
  console.log("무조건 실행되는 코드");
}
