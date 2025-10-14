// 라우터 설정 페이지

// 라우터 설정 생성
import { createBrowserRouter } from "react-router-dom";

// RootLayout 관련 경로 배열 불러오기
import rootRoutes from "./routes/rootRoutes";

// AuthLayout 관련 경로 배열 불러오기
import authRoutes from "./routes/authRoute";

// 404 처리 페이지
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  // 스프레드 연산자(...)로 경로 배열을 복사
  ...rootRoutes,
  ...authRoutes,
  {
    // 모든 주소에 매핑되는 path
    path: "*", // * 의미: 모든 것에 매핑(일치)되는 특수문자
    Component: NotFound,
  },
]);

export default router;
