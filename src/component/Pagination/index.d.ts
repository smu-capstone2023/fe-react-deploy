export type PaginationProps = {
    color?: "primary" | "gray";
    count?: number;
    hideArrowButton?: boolean;
    onChange?: function;
    shape?: "circular" | "rounded";
    size?: "small" | "medium" | "large";
    sx?: object;
    page?: number;
    siblingCount?: number;
};
