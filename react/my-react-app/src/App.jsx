import React from "react";
import Rule from "./components/JSX/Rule";
import Header from "./components/header";
import Interpolation from "./components/JSX/Interpolation";
import MyList from "./components/Component/MyList";
import MyButton from "./components/Component/MyButton";

// App 컴포넌트는 Header 컴포넌트와 InterPolation 컴포넌트를 포함한다
// App 컴포넌트는 Header 컴포넌트와 InterPolation 컴포넌트가 중접됐다
function App() {
  return (
    <div>
      <MyList />
      <MyButton />
    </div>
  );
}
export default App;
