import React from "react";
import "./TalentCounter.scss";

export const TalentCounter = (props) => {
  const maxPoints = props.maxPoints;
  const spentPoints = props.spentPoints;

  return (
    <div className="talent-counter">
      {spentPoints}/{maxPoints} <span>Points Spent</span>
    </div>
  );
};
