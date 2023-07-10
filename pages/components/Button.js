import React from "react";

const Button = ({ text, link, className, onClick }) => {
  return (
    <div>
      <a href={link} onClick={onClick} className={className}>
        {text}
      </a>
    </div>
  );
};

export default Button;
