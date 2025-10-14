import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// useSearchParams 훅 불러오기
// useSearchParams 훅 : 쿼리 파라미터 관리
import { useSearchParams } from "react-router-dom";

// 경로 상수 불러오기
import PATHS from "../../constants/paths";

const BASE_URL = `https://dummyjson.com`;

export default function PostList() {
  const [posts, setPosts] = useState([]);

  // searchParams: 쿼리 파라미터 값을 가진 "객체"
  // setSearchParams: 쿼리 파라미터 값을 변경하는 "함수"
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // searchParams.get(쿼리_파라미터_키)
    // 쿼리 파라미터에서 key가 order인 값을 불러오기
    const order = searchParams.get("order") ?? "id"; // Nullish 연산자를 통해 기본값을 지정
    const sortBy = searchParams.get("sortBy") ?? "asc";

    async function getPosts() {
      const response = await axios.get(
        `${BASE_URL}/posts?sortBy=${sortBy}&order=${order}`
      );
      setPosts(response["data"]["posts"]);
    }
    getPosts();
  }, [searchParams]);
  // 의존성 배열에 searchParams를 넣어서
  // 쿼리 파라미터가 변경되면 useEffect 콜백함수를 실행
  // 쿼리 파라미터가 변경된다 -> setSearchParams() 실행

  return (
    <div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            // id를 기준(sortBy)으로 asc(오름차순) 순서(order)
            setSearchParams({ sortBy: "id", order: "asc" });
          }}
          className="border-2 p-2 cursor-pointer"
        >
          ID 오름차순
        </button>
        <button
          onClick={() => {
            // id를 기준(sortBy)으로 desc(내림차순) 순서(order)
            setSearchParams({ sortBy: "id", order: "desc" });
          }}
          className="border-2 p-2 cursor-pointer"
        >
          ID 내림차순
        </button>
      </div>
      {posts.map((post) => {
        return (
          <Link to={PATHS["ROOT"].getPostDetail(post["id"])} key={post["id"]}>
            {post["id"]}. {post["title"]} <br />
          </Link>
        );
      })}
    </div>
  );
}
