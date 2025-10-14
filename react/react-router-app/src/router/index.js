// 라우터 설정 페이지

// 라우터 설정 생성
import { createBrowserRouter } from "react-router-dom";

// RootLayout 관련 경로 배열 불러오기
import rootRoutes from "./routes/rootRoutes";

// AuthLayout 관련 경로 배열 불러오기
import authRoutes from "./routes/authRoute";

const router = createBrowserRouter([
  // 스프레드 연산자(...)로 경로 배열을 복사
  ...rootRoutes,
  ...authRoutes,
]);

export default router;
