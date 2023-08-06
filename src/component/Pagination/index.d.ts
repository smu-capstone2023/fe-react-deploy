export type PaginationProps = {
    color?: "primary" | "gray";
    count?: number;
    hideArrowButton?: boolean;
    onChange?: (page: number) => void;
    shape?: "circular" | "rounded";
    size?: "small" | "medium" | "large";
    sx?: object;
    siblingCount?: number;
    setPassPage?: (page: number) => void;
};
