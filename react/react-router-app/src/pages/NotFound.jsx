import { Link } from "react-router-dom";
import PATHS from "../constants/paths";

export default function NotFound() {
  return (
    <div>
      <div>페이지를 찾을 수 없습니다. 404 Error!</div>
      <br />
      <Link to={PATHS["ROOT"]["INDEX"]}>홈페이지로 돌아가기</Link>
    </div>
  );
}
