import React, { memo, useMemo } from "react";
import styled from "styled-components";

/**
 * @param placeholder : string
 * @param onChange: () => {}
 * @param background: string
 * @param width: string
 * @param height: string
 * @param value: string
 * @returns
 */

export const InputTextAreaBox = memo(({ placeholder, onChange, background, width = "100%", height, value, autoHeight = false }) => {
    const autoResizeTextarea = () => {
        let textarea = document.querySelector(".autoTextarea");

        if (autoHeight) {
            textarea.style.height = height;
            let scorllHeight = textarea.scrollHeight; // 높이
            textarea.style.height = `${scorllHeight}px`;
        }
    };
    return (
        <WriteTextArea
            style={{ height: height, width: width, overflow: autoHeight ? "hidden" : "" }}
            onInput={autoResizeTextarea}
            defaultValue={value}
            className="autoTextarea"
            background={background}
            placeholder={placeholder}
            onChange={(e) => {
                onChange(e.target.value);
            }}
        />
    );
});

const WriteTextArea = styled.textarea`
    display: flex;
    border: solid 0.5px #e5e5e5;
    border-radius: 5px;
    background: ${(props) => props.background || "white"};
    padding: 0.3rem;
    //resize: none;
    &::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.3);
    }
    :focus {
        outline: none;
    }
`;

export default InputTextAreaBox;
