import React from "react";
import "./TalentPath.scss";
import { TalentButton } from "../TalentButton/TalentButton";
import { TalentConnector } from "../TalentConnector/TalentConnector";

export const TalentPath = (props) => {
  return (
    <div className="talent-path">
      <h2>Talent Path {props.talentPathName}</h2>

      <TalentButton talentName={props.talentPathItems[0]} />
      <TalentConnector />
      <TalentButton talentName={props.talentPathItems[1]} />
      <TalentConnector />
      <TalentButton talentName={props.talentPathItems[2]} />
      <TalentConnector />
      <TalentButton talentName={props.talentPathItems[3]} />
    </div>
  );
};
