export type PaginationProps = {
    color?: "primary" | "standard" | "string";
    count?: number;
    hideNextButton?: boolean;
    onChange?: function;
    renderItem?: function;
    shape?: "circular" | "rounded";
    size?: "small" | "medium" | "large";
    sx?: object;
};
