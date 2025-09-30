import React from "react";

export default function AdminLink({ isAdmin }) {
  return (
    <div>
      <p>현재 권한 : {isAdmin ? "관리자" : "일반 사용자"}</p>

      {/* isAdmin이 true라면 <a> 관리 페이지 이동 </a> 이라는 요소를 화면에 표시 */}
      {isAdmin && <a className="text-blue-500"> 관리 페이지 이동 </a>}
    </div>
  );
}
