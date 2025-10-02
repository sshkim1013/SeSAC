import axios from "axios";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

// create(): axios 객체를 생성하는 메서드

// 아래 axiosInstance 변수로 요청을 보내면
// 기본 주소 : "https://api.themoviedb.org/3"
// 헤더에는 인증 정보(Authorization)가 설정돼서 요청이 간다.
const axiosInstance = axios.create({
  // axios 객체가 가질 속성의 정보
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    language: "ko-KR",
  },
  timeout: 5000,
});

export default axiosInstance;

// baseURL 생성 과정 예시
// 1. axios객체변수.get(/posts) --> axiosInstance.get("/posts")
// 2. 만들어지는 URL : baseURL 속성값 + "/posts"
// 3. 최종 결과: https://api.themoviedb.org/3/posts
