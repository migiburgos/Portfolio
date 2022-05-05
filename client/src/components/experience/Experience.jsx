import React from "react";
import "./experience.css";

function Experience({ number, details }) {
  const [word1, word2] = details.split(" ");
  return (
    <div className="experience">
      <h2>{number}+</h2>
      <p>{word1}</p>
      <p>{word2}</p>
    </div>
  );
}

export default Experience;
