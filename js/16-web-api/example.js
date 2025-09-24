import axios from "axios";

// 도메인 주소
const BASE_URL = "https://dummyjson.com";

// async 화살표 함수
const testRoute = async () => {
  /*
  fetch("https://dummyjson.com/test")
  .then((res) => res.json())
  .then(console.log);
  */

  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data["data"]);
  // { status: 'ok', method: 'GET' } <- 테스트 준비 완료되었다는 의미
};
testRoute();

// 모든 상품 목록 조회
async function getAllProducts() {
  /*
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log);
  */

  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];
  const products = data["products"];
  console.log(products);
}
getAllProducts();

// n번 상품 조회
async function getProductById(n) {
  const response = await axios.get(`${BASE_URL}/products/${n}`);
  const data = console.table(response["data"]);
  console.log(data);
}
getProductById(1);
getProductById(2);
getProductById(10);

// Query Parameters 사용 예제
async function searchProducts(search) {
  const queryParams = new URLSearchParams({ q: search });
  const response = await axios.get(`${BASE_URL}/products?${queryParams}`);
  const data = response["data"];
  console.log(data);
}
searchProducts("phone");

// 상품 목록의 객체 키 추출 예제
async function getAllProducts2() {
  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];
  console.log(Object.keys(data));
}
getAllProducts2();

// 상품 목록의 객체 키-값 쌍 추출 예제
async function getAllProducts3() {
  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];
  console.log(Object.entries(data));
}
getAllProducts3();

async function getProductsData() {
  const res = await axios.get(`${BASE_URL}/products`);

  const products = res["data"]["products"];
  console.log(products);
}
getProductsData();

async function getProductProperty(propertyName) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const values = data["products"].map((product) => product[propertyName]);

  console.log(values);
}
getProductProperty("title");

async function getProductPropertie(propertyNames) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const extractedData = data["products"].map((product) => {
    const result = {};

    propertyNames.forEach((prop) => {
      result[prop] = product[prop];
    });

    return result;
  });

  console.log(extractedData);
}

getProductPropertie(["title", "price", "description"]);
