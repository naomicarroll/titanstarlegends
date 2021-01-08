import React from "react";
import "./TalentButton.scss";

export const TalentButton = (props) => {
  const talentSelect = props.talentSelect;
  const talentDeselect = props.talentDeselect;

  return (
    <div className="icon-wrapper inactive">
      <button
        className={"talent-button icon-" + props.talentName}
        onClick={talentSelect}
        onContextMenu={talentDeselect}
        aria-label={props.talentName + " talent"}
      ></button>
    </div>
  );
};
