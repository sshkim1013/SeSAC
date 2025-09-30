import React from "react";

export default function User({ user }) {
  return (
    <div>
      <li>
        id가 {user["id"]}인 회원의 이름은 {user["name"]}입니다.
      </li>
    </div>
  );
}
