import React from "react";

const ButtonBEM = ({ btnText = "Register" }) => {
  return (
    <>
      <a href="#" className="btn btn--trans">
        <span className="btn__text">{btnText}</span>
        <span className="btn__icon"></span>
      </a>
    </>
  );
};

export default ButtonBEM;
