import React from "react";
import { useAuth } from "../context/AuthProvider";

export default function Home() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {currentUser.email}
    </div>
  );
}
