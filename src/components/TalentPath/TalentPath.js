import React from "react";
import "./TalentPath.scss";
import { TalentButton } from "../TalentButton/TalentButton";
import { TalentConnector } from "../TalentConnector/TalentConnector";

export const TalentPath = (props) => {
  return (
    <div className="talent-path">
      <h2>Talent Path {props.talentPathName}</h2>

      {/* This is a good candidate for refactoring to use React's Context API
          to prevent the need of passing down all these props via intermediate
          components. */}

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
