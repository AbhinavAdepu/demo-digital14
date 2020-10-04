import React from "react";
import bg from "../content-bg1.png";
import ButtonBEM from "./ButtonBEM";

const BoxContentWithBG = ({ imgSrc = bg, upperText, lowerText }) => {
  return (
    <>
      <div className="boxblock">
        <img className="boxblock__imgresponsive" src={imgSrc} alt="header image" />
        <div className="boxblock__imgtitle">
          <div className="boxblock__displayText">{upperText}</div>
          <ButtonBEM />
          <div>{lowerText}</div>
        </div>
      </div>
    </>
  );
};

export default BoxContentWithBG;
