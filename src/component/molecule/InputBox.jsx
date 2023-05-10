import React, { useState } from "react";

/**
 * @param placeholder : string
 * @param onChange: () => {}
 * @returns
 */

const InputBox = ({ placeholder, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            style={{
                padding: "10px",
                height: "50px",
                width: "100%",
                boxSizing: "border-box",
                border: "1px solid #B6B6B6",
                borderRadius: "5px",
                fontSize: "16px",
                background: "#FAFAFA",
                color: "#B6B6B6",
            }}
        />
    );
};

export default InputBox;
