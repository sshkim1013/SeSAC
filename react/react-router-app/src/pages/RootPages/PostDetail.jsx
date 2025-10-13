import { useState, useEffect } from "react";
import axios from "axios";

// 주소에 있는 경로 파라미터를 불러오는 훅(Hook)
// Posts/:postId -> :postId 부분이 경로 파라미터
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const [post, setPost] = useState([]);

  // 경로 파라미터 값 불러오기
  // 라우터 설정에서 설정한 파라미터명과 동일한 변수명을 사용(postId)
  const { postId } = useParams();
  useEffect(() => {
    async function getPost() {
      const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
      setPost(response["data"]);
    }
    getPost();
  }, [postId]);
  return (
    <div>
      <p>제목: {post["title"]}</p>
      <p>내용: {post["body"]}</p>
    </div>
  );
}
