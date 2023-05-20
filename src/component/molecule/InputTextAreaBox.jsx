import React from "react";
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

export const InputTextAreaBox = ({ placeholder, onChange, background, width, height, value }) => {
    return (
        <WriteTextArea
            defaultValue={value}
            width={width}
            height={height}
            background={background}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

const WriteTextArea = styled.textarea`
    display: flex;
    border: solid 0.5px #e5e5e5;
    border-radius: 5px;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "10rem"};
    background: ${(props) => props.background || "white"};
    padding: 0.3rem;
    overflow: auto;
    resize: none;
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
