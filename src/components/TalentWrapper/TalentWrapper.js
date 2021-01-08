import React, { useState } from "react";
import "./TalentWrapper.scss";
import {
  MAX_POINTS,
  STARTING_POINTS,
  PATH_ONE_POINTS_SPENT,
  PATH_TWO_POINTS_SPENT,
  TALENTS,
} from "../../common/consts";
import { TalentPath } from "../TalentPath/TalentPath";
import { TalentCounter } from "../TalentCounter/TalentCounter";

export const TalentWrapper = (props) => {
  // State Initialization ----------------------------------------------------

  const [maxPoints, setMaxPoints] = useState(MAX_POINTS);
  const [startingPoints, setStartingPoints] = useState(STARTING_POINTS);
  const [spentPoints, setSpentPoints] = useState(startingPoints);
  const [pathOnePointsSpent, setPathOnePointsSpent] = useState(
    PATH_ONE_POINTS_SPENT
  );
  const [pathTwoPointsSpent, setPathTwoPointsSpent] = useState(
    PATH_TWO_POINTS_SPENT
  );

  // Util methods ------------------------------------------------------------

  function talentSelect() {
    if (spentPoints < maxPoints) {
      setSpentPoints(spentPoints + 1);
    }

    return this;
  }

  function talentDeselect(e) {
    e.preventDefault();

    if (spentPoints >= 1) {
      setSpentPoints(spentPoints - 1);
    }

    return this;
  }

  function getPathTalentIds(talentPathObject) {
    let talentIdList = [];

    talentPathObject.filter((e) => {
      talentIdList.push(e.talentId);
    });

    return talentIdList;
  }

  // Render ------------------------------------------------------------------

  return (
    <div className="talent-wrapper">
      <TalentPath
        talentPathName="1"
        talentPathItems={getPathTalentIds(TALENTS.pathOne)}
        talentSelect={talentSelect}
        talentDeselect={talentDeselect}
      />

      <TalentPath
        talentPathName="2"
        talentPathItems={getPathTalentIds(TALENTS.pathTwo)}
        talentSelect={talentSelect}
        talentDeselect={talentDeselect}
      />

      <TalentCounter spentPoints={spentPoints} maxPoints={maxPoints} />
    </div>
  );
};
