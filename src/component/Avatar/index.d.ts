export type AvatarProps = {
    src?: string;
    size: number;
    onClick?: () => void;
    handleClick?: () => void;
    profileEdit?: boolean;
    onNewProfileImageSelected?: Dispatch<SetStateAction<string | null>>;
};
