import React from "react";
import Profile from "./Profile";

export default function ProfileContainer() {
  return (
    <div>
      <Profile
        user={{
          name: "치즈",
          age: 200,
          isAdmin: true,
        }}
      />
    </div>
  );
}
