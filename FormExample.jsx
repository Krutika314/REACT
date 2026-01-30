// src/examples/EventExample.jsx
import React from "react";

function EventExample() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "6px 12px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#e76cd9",
        color: "#12010f",
        cursor: "pointer",
      }}
    >
      Click Me
    </button>
  );
}

export default EventExample;