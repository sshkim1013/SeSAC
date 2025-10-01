import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

// 컴포넌트가 첫 렌더링될 때 DummyJSON으로 데이터를 요청(axios를 써서)
// useEffect의 특징: 컴포넌트가 첫 렌더링될 때 콜백함수가 실행
export default function RequestData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios를 사용해서 DummyJSON Products 데이터를 요청
    // await를 사용하기 위해서는 async function 필요
    async function getProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      const data = response["data"];
      console.log(data);
      // 응답 데이터에서 필요한 속성을 상태(state)로 변경해야 한다
      setProducts(data["products"]);
    }
    getProducts();
  }, []); // 빈 의존성 배열

  return (
    <div>
      {products.map((product) => {
        // 매개변수 product를 Product 컴포넌트에 props로 전달
        // 속성명: product / 값: 매개변수 product
        return <Product product={product}></Product>;
      })}
    </div>
  );
}
