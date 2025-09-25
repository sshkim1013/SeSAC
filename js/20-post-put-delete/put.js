// 20-post-put-delete/put.js

import axios from "axios";

async function putProduct() {
  // axios 설정 객체 config
  const config = {
    url: "https://dummyjson.com/products/1",
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: {
      title: "MacBook Pro 5",
    },
  };
  // 응답 데이터 저장
  const response = await axios(config);

  // 응답 데이터에서 data 속성 추출
  const data = response["data"];

  console.log(data);
}

putProduct();
