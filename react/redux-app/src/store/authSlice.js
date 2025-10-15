// Access Token 상태 관리
// 로그인, 회원가입, 로그아웃 같은 네트워크 비동기 처리

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 로그인 요청을 보낼 인증 서버에 대한 정보
const SUPABASE_URL = "https://jfsjmxtokcazzpykrxwp.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmc2pteHRva2NhenpweWtyeHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMDE4NjksImV4cCI6MjA3NTc3Nzg2OX0.n-IAryEgUti5atr30MGszQ-fzStuW3BZDRMuaPPIefw";

// 회원가입 비동기 처리
const signup = createAsyncThunk(
  "auth/signup", // 액션명
  // 비동기(async) 처리 함수
  async (data, { rejectWithValue }) => {
    // 매개변수 data: action의 payload 역할(외부에서 들어오는 값)
    // 실제로 data 변수에 저장될 데이터는 회원가입을 위해 필요한 데이터이다.
    try {
      // config: 요청 정보
      const config = {
        url: `${SUPABASE_URL}/auth/v1/signup`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: SUPABASE_ANON_KEY,
        },
        data: {
          // supabase 기준
          // 회원가입을 위해 필요한 데이터(이메일, 패스워드)
          email: data["email"],
          password: data["password"],
        },
      };
      const response = await axios(config);
      // 비동기 처리를 성공 했을 때의 데이터
      return response["data"];
    } catch (error) {
      // 비동기 처리를 실패 했을 때의 데이터
      return rejectWithValue(error["response"]["data"]);
    }
  }
);

// 로그인 비동기 처리
const login = createAsyncThunk(
  "auth/login",
  // 비동기(async) 처리 함수
  async (data, { rejectWithValue }) => {
    // 로그인 로직 코드
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: SUPABASE_ANON_KEY,
        },
        data: {
          // 로그인 정보
          email: data["email"],
          password: data["password"],
        },
      };
      const response = await axios(config);
      console.log(response["data"]);
      return response["data"];
    } catch (error) {
      return rejectWithValue(error["response"]["data"]);
    }
  }
);

// 비동기 처리 3개의 상태: 대기, 성공, 실패(거절)

// 초기 상태
const initialState = {
  token: null, // 액세스 토큰 관리 상태
  error: null, // 에러 여부 관리 상태
  isSignup: false, // 회원가입 성공 여부 관리 상태
};

// 슬라이스(리듀서 + 액션) 생성
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // 회원가입 성공 여부를 초기화(false)
    resetIsSignup: (state) => {
      state["isSignup"] = false;
    },
  },
  // 위애서 정의한 비동기 처리 함수(액션)을 처리할 리듀서
  extraReducers: (builder) => {
    // 각 비동기 처리에 대한
    // 대기(pending) / 성공(fulfilled) / 실패(reject)
    // 처리 로직
    builder
      .addCase(signup["fulfilled"], (state) => {
        // signup 비동기 처리가
        // 성공(fulfilled)일 때 실행되는 콜백함수
        state["isSignup"] = true;
      })
      .addCase(login["fulfilled"], (state, action) => {
        // login 비동기 처리가 성공일 때 실행되는 콜백 함수
        state["token"] = action["payload"]["access_token"];
      })
      .addCase(signup["rejected"], (state, action) => {
        // action["payload"] 어디서 왔는가?
        // return rejectWithValue(error["response"]["data"])
        state["error"] = action["payload"];
      });
  },
});

// 액션과 리듀서, 비동기 처리 액션 내보내기
export const { resetIsSignup } = authSlice["actions"];
export default authSlice["reducer"];
export { signup, login };
