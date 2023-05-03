import React, { useState } from 'react';

/**
 * @param placeholder : string
 * @param onChange: () => {}
 * @returns
 */

const InputBox = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      style={{
        padding: "10px",
        height: "50px",
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid #B6B6B6",
        borderRadius: "5px",
        fontSize: "16px",
        background: '#FFFFFF',
        color: "#B6B6B6",
      }}
    />
  );
}

export default InputBox;
