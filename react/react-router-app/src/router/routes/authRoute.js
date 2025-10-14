// AuthLayout과 AuthLayout에 중첩된 페이지 경로 배열을 정의

import AuthLayout from "../../layout/AuthLayout";
import AuthHome from "../../pages/AuthPages/AuthHome";
import Signup from "../../pages/AuthPages/Signup";
import Login from "../../pages/AuthPages/Login";

// 경로 상수 불러오기
import PATHS from "../../constants/paths";

const authRoutes = [
  {
    path: PATHS["AUTH"]["INDEX"],
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: PATHS["AUTH"]["SIGNUP"],
        Component: Signup,
      },
      {
        path: PATHS["AUTH"]["LOGIN"],
        Component: Login,
      },
    ],
  },
];

export default authRoutes;
