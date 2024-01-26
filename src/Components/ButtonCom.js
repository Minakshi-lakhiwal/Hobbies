// Button.js
import React from "react";
import PropTypes from "prop-types";
const ButtonCom = ({ label }) => {
  const buttonStyle = {
    border: "1px solid #8064A2",
    backgroundColor: "#fff",
    color: "#8064A2",
    padding: "10px 32px",
    borderRadius: "8px",
  };

  return (
    <button style={buttonStyle} type="button">
      {label}
    </button>
  );
};

ButtonCom.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonCom.defaultProps = {
  onClick: () => {},
};

export default ButtonCom;
