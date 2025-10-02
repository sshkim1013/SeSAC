// TMDB API 요청 함수 관리 파일
// axios를 활용한 TMDB API 요청 함수를 별도로 정의하고 내보내는 파일
import axiosInstance from "./index";

// TMDB Popular API 요청 함수
// 응답 데이터를 반환하는 함수
// export: 모듈 내보내기 (외부에서 해당 모듈을 사용할 수 있도록)
export async function getPopularMovies() {
  const config = {
    method: "GET",
    url: `/movie/popular`,
    params: {
      page: 1,
    },
  };

  // 응답 데이터 response 반환
  const response = await axiosInstance(config);
  return response;
}
