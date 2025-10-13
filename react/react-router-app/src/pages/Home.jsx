// Link 컴포넌트는 <a> 태그를 대체한다.
// 외부로 나가는 링크가 아닌 이상 <a> 태그를 사용 X.
// 외부: 아예 다른 사이트의 페이지.
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* to 속성: 어떤 주소로 이동할 것인지? */}
      <Link to="/">홈</Link>
      <br />
      <Link to="/about">소개</Link>
      <br />
      <Link to="/profile">프로필</Link>
    </div>
  );
}
