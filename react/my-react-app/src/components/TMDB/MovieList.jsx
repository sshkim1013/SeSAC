import { useEffect, useState } from "react";

// 모듈화 된 API 함수 요청 불러오기
import { getPopularMovies } from "../../api/tmdb";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // 모듈화 된 함수는 Promise 기반이라서
      // await 키워드 필수!
      const response = await getPopularMovies();
      setMovies(response["data"]["results"]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
