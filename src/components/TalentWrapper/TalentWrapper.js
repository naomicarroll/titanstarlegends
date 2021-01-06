import React, { useState } from "react";
import "./TalentWrapper.scss";
import { MAX_POINTS } from "../../common/consts";
import { TalentPath } from "../TalentPath/TalentPath";
import { TalentCounter } from "../TalentCounter/TalentCounter";

export const TalentWrapper = (props) => {
  const [maxPoints, setMaxPoints] = useState(MAX_POINTS);
  const [availablePoints, setAvailablePoints] = useState(maxPoints);

  const talentSelect = () => {
    if (availablePoints >= 1) {
      setAvailablePoints(availablePoints - 1);
    }
  };

  const talentDeselect = (e) => {
    e.preventDefault();

    if (availablePoints < maxPoints) {
      setAvailablePoints(availablePoints + 1);
    }
  };

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
        talentSelect={talentSelect}
        talentDeselect={talentDeselect}
      />

      <TalentPath
        talentPathName="2"
        talentPathItems={[
          "icon-boat",
          "icon-diver",
          "icon-lightning",
          "icon-skull",
        ]}
        talentSelect={talentSelect}
        talentDeselect={talentDeselect}
      />

      <TalentCounter maxPoints={maxPoints} availablePoints={availablePoints} />
    </div>
  );
};
