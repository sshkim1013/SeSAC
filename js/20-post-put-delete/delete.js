// 20-post-put-delete/delete.js

import axios from "axios";

async function deletePost() {
  // axios 요청 설정 객체
  const config = {
    method: "delete",
    url: "https://dummyjson.com/products/1",
  };

  const response = await axios(config);
  const data = response["data"];
  console.log(data);
}

deletePost();
