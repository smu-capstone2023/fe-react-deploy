/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextFieldProps } from "./index.d";
import { ReactElement } from "react";

export default function TextField(props: TextFieldProps): ReactElement {
    const {
        value = "",
        defaultValue = "",
        variant = "outlined",
        size = "small",
        fullWidth,
        disabled,
        placeholder = "",
        color = "primary",
        onChange,
        sx,
        type,
    } = props;

    const getSizeStyles = () => {
        switch (size) {
            case "small":
                return css`
                    font-size: 0.8rem;
                    padding: 0.8rem;
                `;
            case "medium":
                return css`
                    font-size: 1rem;
                    padding: 1rem;
                `;
        }
    };

    const getColorStyles = () => {
        switch (color) {
            case "primary":
                return css`
                    border-color: #4169e1;
                    ${variant === "filled" ? `background-color: #DCE4FF` : ""}
                `;
            case "gray":
                return css`
                    border-color: #a9a9a9;
                    ${variant === "filled" ? `background-color: #E9E9E9` : ""};
                `;
        }
    };

    const getVariantStyles = () => {
        switch (variant) {
            case "outlined":
                return css`
                    border: solid 1px;
                    border-radius: 3px;
                `;
            case "filled":
                return css`
                    border: none;
                    border-bottom: solid 1px;
                    border-radius: 3px 3px 0 0;
                `;
            case "standard":
                return css`
                    border: none;
                    border-bottom: solid 1px;
                `;
        }
    };

    return (
        <>
            <input
                css={css`
                    ${getVariantStyles()}
                    ${getColorStyles()}
                    ${getSizeStyles()}
                    ${fullWidth ? `width: 100%` : ""}
                    &:focus-within {
                        outline: none;
                        border-width: 1.8px;
                    }
                `}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                type={type}
                disabled={disabled}
                onChange={onChange}
                style={sx}
            />
        </>
    );
}
