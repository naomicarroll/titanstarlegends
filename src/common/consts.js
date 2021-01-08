// ===========================================================================
// Constants
// ===========================================================================

// Initial talent points
const MAX_POINTS = 6;
const STARTING_POINTS = 0;
const PATH_ONE_POINTS_SPENT = 0;
const PATH_TWO_POINTS_SPENT = 0;

// Talent paths
const TALENTS = {
  pathOne: [
    {
      talentId: "chevron",
      isSelected: false,
      isSelectable: false,
      isDeselectable: false,
      cost: 0,
    },
    {
      talentId: "utensils",
      isSelected: false,
      isSelectable: false,
      isDeselectable: false,
      cost: 1,
    },
    {
      talentId: "cake",
      isSelected: false,
      isSelectable: false,
      isDeselectable: false,
      cost: 2,
    },
    {
      talentId: "crown",
      isSelected: false,
      isSelectable: false,
      isDeselectable: false,
      cost: 3,
    },
  ],

  pathTwo: [
    {
      talentId: "boat",
      isSelected: false,
      isSelectable: false,
      isDeselectable: false,
      root: true,
      cost: 0,
    },
    {
      talentId: "diver",
      isSelected: false,
      isSelectable: false,
      isDeselectable: false,
      cost: 1,
    },
    {
      talentId: "lightning",
      isSelected: false,
      isSelectable: false,
      isDeselectable: false,
      cost: 2,
    },
    {
      talentId: "skull",
      isSelected: false,
      isSelectable: false,
      isDeselectable: false,
      cost: 3,
    },
  ],
};

export {
  MAX_POINTS,
  STARTING_POINTS,
  PATH_ONE_POINTS_SPENT,
  PATH_TWO_POINTS_SPENT,
  TALENTS,
};
