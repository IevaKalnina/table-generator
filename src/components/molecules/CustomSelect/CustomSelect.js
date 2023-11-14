import React, { useState } from "react";
import arrowUpIcon from "../../../assets/icons/arrow-up.svg";
import arrowDownIcon from "../../../assets/icons/arrow-down.svg";
import "./CustomSelect.scss";

const CustomSelect = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  const arrowIcon = isOpen ? arrowUpIcon : arrowDownIcon;

  return (
    <div className="custom-select-container">
      <div
        className={`selected-value ${value ? "" : "placeholder"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "City"}
        {/* Icon image */}
        <img src={arrowIcon} className="arrow-icon" alt="Toggle Dropdown" />
      </div>
      {isOpen && (
        <div className="options-container">
          {options.map((option, index) => (
            <div
              key={index}
              className={`option ${value === option ? "selected" : ""} `}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
