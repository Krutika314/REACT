// src/examples/PropsExample.jsx
import React from "react";

function Person(props) {
  return (
    <div>
      <h3 style={{ color: "#060800" }}>Name: {props.name}</h3>
      <p style={{ color: "#030000" }}>Age: {props.age}</p>
    </div>
  );
}

function PropsExample() {
  return <Person name="Krutika" age={21} />;
}

export default PropsExample;