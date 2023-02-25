import React from "react";
import Category from "./category";
import IconReaction from "../assets/images/icon-reaction.svg";
import IconMemory from "../assets/images/icon-memory.svg";
import IconVerbal from "../assets/images/icon-verbal.svg";
import IconVisual from "../assets/images/icon-visual.svg";

const Summary = () => {
  const handleSubmit = () => {
    window.close();
  }

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <ul>
        <Category icon={IconReaction} categoryName="Reaction" score="80" bgColor="#fff6f5" textColor="#f58082" />
        <Category icon={IconMemory} categoryName="Memory" score="92" bgColor="#fffbf2" textColor="#e9b64a" />
        <Category icon={IconVerbal} categoryName="Verbal" score="61" bgColor="#f2fafa" textColor="#58b99f" />
        <Category icon={IconVisual} categoryName="Visual" score="72" bgColor="#f3f3fd" textColor="#3c46c9" />
      </ul>
      <button type="button" className="button" onClick={handleSubmit}>Continue</button>
      <p id="closing-message">
        Click this button to close the tab
      </p>
    </div>
  )
}

export default Summary;