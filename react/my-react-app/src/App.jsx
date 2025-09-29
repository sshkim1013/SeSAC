import React from "react";
import Rule from "./components/JSX/Rule";
import Header from "./components/header";
import Interpolation from "./components/JSX/Interpolation";
import OnClick from "./components/EventHandling/OnClick";
import OnChange from "./components/EventHandling/OnChange";

export default function App() {
  return (
    <div>
      <OnClick></OnClick>
      <OnChange></OnChange>
    </div>
  );
}
