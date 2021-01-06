import React from "react";
import "./TalentCounter.scss";

export const TalentCounter = (props) => {
  const maxPoints = props.maxPoints;
  const availablePoints = props.availablePoints;

  return (
    <div className="talent-counter">
      {availablePoints}/{maxPoints} <span>Points Spent</span>
    </div>
  );
};
