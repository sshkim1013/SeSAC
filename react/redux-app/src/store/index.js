// 전역 상태 스토어 설정

// 리듀서를 받아서 store를 생성하는 함수
import { configureStore } from "@reduxjs/toolkit";

// 리듀서 불러오기
import counterReducer from "./counterSlice";

// 인증 리듀서 불러오기
import authReducer from "./authSlice";

// 스토어 생성
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
