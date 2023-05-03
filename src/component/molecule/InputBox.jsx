import React, { useState } from 'react';

const InputBox = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="학번"
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
        fontFamily: "NEXON Lv1 Gothic",
        color: "#B6B6B6"
      }}
    />
  );
}

export default InputBox;
