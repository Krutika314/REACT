// src/examples/ComponentsExample.jsx
import React from "react";

function Welcome(props) {
  return <h2 style={{ color: "#000000" }}>Hello, {props.name}</h2>;
}

function ComponentsExample() {
  return (
    <div>
      <Welcome name="Krutika" />
    </div>
  );
}

export default ComponentsExample;