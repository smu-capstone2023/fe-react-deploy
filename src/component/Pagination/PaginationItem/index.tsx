/** @jsxImportSource @emotion/react */
import { PaginationItemProps } from "./index.d";
import { css } from "@emotion/react";

export default function PaginationItem(props: PaginationItemProps) {
    const { color = "primary", shape = "circular", size = "medium", selected = false, sx, hide = false, page = "1" } = props;
    const getColorStyles = () => {
        switch (color) {
            case "gray":
                return `background: #e9e9e9;`;
            case "primary":
                return `background: #DCE4FF;`;
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case "small":
                return `font-size: 0.8rem; width: 2rem; height: 2rem;`;
            case "medium":
                return `font-size: 1rem; width: 2.5rem; height: 2.5rem;`;
            case "large":
                return `font-size: 1.2rem; width:3rem; height:3rem;`;
        }
    };

    const getShapeStyles = () => {
        switch (shape) {
            case "circular":
                return `border-radius: 100%;`;
            case "rounded":
                return `border-radius: 5px;`;
        }
    };

    return (
        <button
            style={sx}
            css={css`
                border: none;
                ${selected ? getColorStyles() : `background: transparent;`}
                ${getSizeStyles()}
                ${getShapeStyles()}
                ${hide ? "display: none;" : ""}
            `}
        >
            {page}
        </button>
    );
}
