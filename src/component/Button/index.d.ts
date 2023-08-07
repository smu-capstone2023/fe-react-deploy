export type ButtonProps = {
    label?: string;
    clickHandler: any,
    color?: string;
    outlineColor?: "primary" | "gray";
    backgroundColor?: string;
    onChange?: () => void;
    size?: "small" | "medium" | "large";
    variant?:  "filled" | "outlined";
    borderRadius?: number;
    className?,
};
