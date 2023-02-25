import React from "react";

const Score = () => (
  <div className="score-container">
    <h2>Your Result</h2>
    <div className="score-number-container">
      <p id="score-main">76</p>
      <p id="score-sub">of 100</p>
    </div>
    <h3>Great</h3>
    <p>
      You scored higher than 65% of the people 
      who have taken these tests.
    </p>
    
  </div>
);

export default Score;