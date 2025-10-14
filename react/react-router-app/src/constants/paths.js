// 경로 문자열을 관리하는 상수 객체
const PATHS = {
  // Root Layout의 중첩된 경로
  ROOT: {
    // RootLayout의 기본(진입) 경로
    // 절대 경로로 작성
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    
    // 경로 파라미터의 라우터 설정 속성
    POSTS_DETAIL: "/posts/:postId",

    // 경로 파라미터를 처리한 메서드(함수)
    // 외부에서 postId를 전달 받아서
    // 동적으로 경로 파라미터를 적용한 주소 생성
    // 컴포넌트에서 사용할 경로 파라미터 주소 생성 메서드
    getPostDetail: (postId) => `/posts/${postId}`,

    PROFILE: "/profile",
  },
  // AuthLayout의 기본(진입) 경로
  // 절대 경로로 작성
  AUTH: {
    INDEX: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
};

export default PATHS;
