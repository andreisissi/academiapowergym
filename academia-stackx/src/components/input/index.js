import React from "react";
import "./index.css";

function Input(props) {
  const { type, onChange, placeholder } = props;
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className='input'
    />
  );
}

export default Input;
