/** @jsxImportSource @emotion/react */
import styled, { css } from "@emotion/react";
import { AiOutlineRight } from "react-icons/ai";

interface Prop {
    title: string;
    onClick?: () => void;
}
export default function ListItem({ title, onClick }: Prop) {
    return (
        <div
            onClick={onClick}
            css={css`
                padding: 10px 0;
                display: flex;
                justify-content: space-between;
            `}
        >
            <p
                css={css`
                    font-family: nexon-regular;
                    font-size: 16px;
                `}
            >
                {title}
            </p>
            <AiOutlineRight size={24} color="#C0C0C0" />
        </div>
    );
}
