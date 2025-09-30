import React from "react";

import Child from "./Child";

export default function Parent() {
  return (
    <div>
      <Child>
        <div>
          <h2>치즈</h2>
          <h3>거주지: 치즈나라</h3>
          <h3>나이: 100세</h3>
          <p>안녕하세요. 저는 치즈나라에 사는 치즈입니다.</p>
        </div>
      </Child>
      <Child>
        <div>
          <h2>과자</h2>
          <h3>거주지: 과자나라</h3>
          <h3>나이: 101세</h3>
          <p>안녕하세요. 저는 과자나라에 사는 과자입니다.</p>
        </div>
      </Child>
      <Child>
        <div>
          <h2>감자</h2>
          <h3>거주지: 강원도</h3>
          <h3>나이: 102세</h3>
          <p>안녕하세요. 저는 강원도에 사는 감자입니다.</p>
        </div>
      </Child>
    </div>
  );
}
