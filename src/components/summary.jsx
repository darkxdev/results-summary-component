import React from "react";
import Category from "./category";
import IconReaction from "../assets/images/icon-reaction.svg";
import IconMemory from "../assets/images/icon-memory.svg";
import IconVerbal from "../assets/images/icon-verbal.svg";
import IconVisual from "../assets/images/icon-visual.svg";

const Summary = () => (
  <div className="summary-container">
    <h2>Summary</h2>
    <ul>
      <Category icon={IconReaction} categoryName={"Reaction"} score="80"/>
      <Category icon={IconMemory} categoryName={"Memory"} score="92"/>
      <Category icon={IconVerbal} categoryName={"Verbal"} score="61"/>
      <Category icon={IconVisual} categoryName={"Visual"} score="72"/>
    </ul>
    <button type="button">Continue</button>
  </div>
)

export default Summary;