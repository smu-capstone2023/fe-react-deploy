/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Avatar from "component/Avatar";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
interface Prop {
    username?: string;
    onClick?: () => void;
    isLiked?: boolean;
}

export default function PostHeader({ username = "알 수 없음", onClick = () => {}, isLiked = false }: Prop) {
    return (
        <div
            css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                `}
            >
                <Avatar size={45} />
                <p
                    css={css`
                        font-family: nexon-regular;
                        font-size: 1.3rem;
                    `}
                >
                    {username}
                </p>
            </div>
            {isLiked ? (
                <AiTwotoneHeart size={25} color="#fa9090" onClick={onClick} />
            ) : (
                <AiOutlineHeart size={25} color="#fa9090" onClick={onClick} />
            )}
        </div>
    );
}
