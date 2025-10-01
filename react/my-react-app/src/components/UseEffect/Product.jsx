// 개별 Product의 UI(컴포넌트)
// 구조 분해 할당을 활용해서 객체 props를 분해
// product : 개별 상품 정보를 저장하고 있는 객체 데이터

export default function Product({ product }) {
  return (
    <div>
      <p>{product["title"]}</p>
      <p>{product["description"]}</p>
      <hr />
    </div>
  );
}
