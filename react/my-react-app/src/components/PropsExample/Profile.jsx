import React from "react";

export default function Profile(props) {
  return (
    <div>
      {props["user"]["name"]}, {props["user"]["age"]}, {props["user"]["isAdmin"]}
    </div>
  );
}
