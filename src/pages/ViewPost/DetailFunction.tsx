// ViewPost/DetailFunction.tsx
import { IoEllipsisVertical } from "react-icons/io5";

interface DetailFunctionProps {
    size?: number;
    color?: string;
    postId: string;
    userId: string;
    isAuthor: boolean;
    onClick?: () => void;
}

export default function DetailFunction({ size = 25, color = "#888888", postId, userId, isAuthor, onClick = () => {} }: DetailFunctionProps) {
    return (
        <IoEllipsisVertical style={{flex: 1}} size={size} color={color} onClick={onClick} />
    );
}
