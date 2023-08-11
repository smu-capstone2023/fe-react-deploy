/** @jsxImportSource @emotion/react */
import styled, { css } from "@emotion/react";

interface Prop {
    title: string;
    onClick?: () => void;
    background: string;
}

export default function MbtiButton({ title, onClick, background }: Prop) {
    return (
        <button
            onClick={onClick}
            css={css`
                display: flex;
                border-radius: 8px;
                padding: 12px 15px;
                font-family: nexon-regular;
                font-size: 16px;
                width: 20%;
                justify-content: center;
                align-items: center;
                background: ${background ? background : "#E8E8E8"};
                color: ${background ? "#FFFFFF" : "#000000"};

                @media screen and (max-width: 768px) {
                    font-size: 12px;
                }
            `}
        >{title}</button>
    );
}