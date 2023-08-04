export type TextFieldProps = {
    value?: string;
    defaultValue?: string;
    variant?: "outlined" | "filled" | "standard";
    placeholder?: string;
    onChange?: function;
    size?: "small" | "medium";
    fullWidth?: boolean;
    disabled?: boolean;
    sx?: any;
    type?: string;
    color?: "primary" | "gray";
};
