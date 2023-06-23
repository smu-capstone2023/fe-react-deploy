import React, { useState } from "react";
import { debounce } from "lodash";
/**
 * @param placeholder : string
 * @param onChange: () => {}
 * @param background: string;
 * @returns
 */

const InputBox = ({ placeholder, onChange, background = "#FAFAFA", type = "text" }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInput = ({ target }) => {
        onChange(target.value);
        setInputValue(target.value);
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={debounce(handleInput, 550)}
            style={{
                padding: "10px",
                height: "50px",
                width: "100%",
                boxSizing: "border-box",
                border: "1px solid #B6B6B6",
                borderRadius: "5px",
                fontSize: "16px",
                background: background,
                color: "#B6B6B6",
            }}
        />
    );
};

export default InputBox;
