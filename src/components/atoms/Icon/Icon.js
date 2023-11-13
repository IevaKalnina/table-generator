import React from "react";

const Icon = ({ src, alt, className }) => {
  return <img src={src} className={`icon + ${className}`} alt={alt} />;
};

export default Icon;
