import React from "react";
import StringState from "./StringState";
import NumberState from "./NumberState";
import StateBasic from "./StateBasic";
import ObjectState from "./ObjectState";
import ArrayState from "./ArrayState";

export default function Container() {
  return (
    <div>
      <ArrayState></ArrayState>
    </div>
  );
}
