import React, { useState } from "react";
import "./TalentWrapper.scss";
import { MAX_POINTS, STARTING_POINTS } from "../../common/consts";
import { TalentPath } from "../TalentPath/TalentPath";
import { TalentCounter } from "../TalentCounter/TalentCounter";

export const TalentWrapper = (props) => {
  const [maxPoints, setMaxPoints] = useState(MAX_POINTS);
  const [startingPoints, setStartingPoints] = useState(STARTING_POINTS);
  const [spentPoints, setSpentPoints] = useState(startingPoints);

  const talentSelect = () => {
    if (spentPoints < maxPoints) {
      setSpentPoints(spentPoints + 1);
    }
  };

  const talentDeselect = (e) => {
    e.preventDefault();

    if (spentPoints >= 1) {
      setSpentPoints(spentPoints - 1);
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

      <TalentCounter spentPoints={spentPoints} maxPoints={maxPoints} />
    </div>
  );
};
