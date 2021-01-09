import React from "react";
import "./TalentButton.scss";

export const TalentButton = (props) => {
  const talentSelect = props.talentSelect;
  const talentDeselect = props.talentDeselect;

  // ENHANCEMENT: an opportunity for a11y improvements for this component
  // would be the ability to "right click" using a keyboard for non-mouse
  // users, such as those who use "suck and puff" accessibility devices for
  // navigating the web. Windows allows non-screen reader keyboard users to
  // use shift-F10 to activate the context menu, but MacOS doesn't by default
  // allow this.
  //
  // As an alternative, having a hidden button that's only
  // accessible via tab navigation (much like a skip link) would allow Mac
  // keyboard users to still be able to remove talent points, and comply with
  // the WCAG 2.1 AA specification

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
