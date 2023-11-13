import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

export default function Input({ type, placeholder, value, onChange, error }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="input-container">
      <input
        type={type}
        placeholder={!isFocused ? placeholder : ""}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "",
  error: "",
};
