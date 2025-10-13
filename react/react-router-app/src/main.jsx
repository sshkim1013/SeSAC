import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// 라우터 설정 불러오기
import router from "./router";

// 라우터 설정을 어플리케이션에 적용(제공)할 컴포넌트(Provider)
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* RouterProvider 배치 */}
    {/* router 속성 : 어떤 라우터 설정을 사용할 것인가?? => 여기서는 index.js에 직접 설정한 설정을 사용*/}
    <RouterProvider router={router} />
  </StrictMode>
);
