/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function Separator() {
    return (
        <div
            css={css`
                display: flex;
                height: 10px;
                background-color: #f3f3f3;
            `}
        ></div>
    );
}
