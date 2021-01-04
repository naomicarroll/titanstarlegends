import React from "react";
import "./TalentButton.scss";

export const TalentButton = (props) => {
  return (
    <div className="icon-wrapper inactive">
      <button className={"talent-button " + props.talentName}></button>
    </div>
  );
};
