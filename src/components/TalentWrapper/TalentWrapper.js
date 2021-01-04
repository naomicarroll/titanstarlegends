import React from "react";
import "./TalentWrapper.scss";
import { TalentPath } from "../TalentPath/TalentPath";
import { TalentCounter } from "../TalentCounter/TalentCounter";

export const TalentWrapper = (props) => {
  return (
    <div className="talent-wrapper">
      <TalentPath
        talentPathName="1"
        talentPathItems={[
          "icon-chevron",
          "icon-utensils",
          "icon-cake",
          "icon-crown",
        ]}
      />

      <TalentPath
        talentPathName="2"
        talentPathItems={[
          "icon-boat",
          "icon-diver",
          "icon-lightning",
          "icon-skull",
        ]}
      />

      <TalentCounter />
    </div>
  );
};
