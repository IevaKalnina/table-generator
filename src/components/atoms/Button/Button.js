import React from "react";
import PropTypes from "prop-types";
// import "./Button.scss"; // Assuming you have a separate CSS file for styles

export default function Button({ onClick, className, disabled, children }) {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: "",
  disabled: false,
};
