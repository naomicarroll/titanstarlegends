import React from "react";
import "./TalentPath.scss";
import { TalentButton } from "../TalentButton/TalentButton";
import { TalentConnector } from "../TalentConnector/TalentConnector";

export const TalentPath = (props) => {
  return (
    <div className="talent-path">
      <h2>Talent Path {props.talentPathName}</h2>

      {/* find cleaner way of passing talentSelect and talentDeselect through to TalentButton */}

      <TalentButton
        talentName={props.talentPathItems[0]}
        talentSelect={props.talentSelect}
        talentDeselect={props.talentDeselect}
      />
      <TalentConnector />
      <TalentButton
        talentName={props.talentPathItems[1]}
        talentSelect={props.talentSelect}
        talentDeselect={props.talentDeselect}
      />
      <TalentConnector />
      <TalentButton
        talentName={props.talentPathItems[2]}
        talentSelect={props.talentSelect}
        talentDeselect={props.talentDeselect}
      />
      <TalentConnector />
      <TalentButton
        talentName={props.talentPathItems[3]}
        talentSelect={props.talentSelect}
        talentDeselect={props.talentDeselect}
      />
    </div>
  );
};
