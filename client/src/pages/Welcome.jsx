import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome to Nimthara</h1>
      <button
        onClick={() => navigate("/add")}
        style={{ padding: "0.5rem 1rem" }}
      >
        Go to Add Items
      </button>
    </div>
  );
}
