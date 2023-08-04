/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Avatar from "component/Avatar";
import { AiOutlineHeart, AiOutlineMessage, AiTwotoneHeart } from "react-icons/ai";

interface Prop {
    username?: string;
    likes?: number;
    date?: string;
    content?: string;
    onClickLike?: () => void;
    isLiked?: boolean;
}
export default function CommentItem({ username, likes, date, content, onClickLike, isLiked }: Prop) {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                border-bottom-width: 2px;
                border-color: #f3f3f3;
            `}
        >
            <div
                css={css`
                    padding: 0.8rem 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                `}
            >
                <div
                    css={css`
                        display: flex;
                        gap: 0.5rem;
                        align-items: center;
                    `}
                >
                    <Avatar size={30} />
                    <p
                        css={css`
                            font-family: nexon-regular;
                            font-size: 1rem;
                        `}
                    >
                        {username}
                    </p>
                </div>
                <div
                    css={css`
                        display: flex;
                        gap: 0.2rem;
                    `}
                >
                    <AiOutlineMessage size={20} color="#888" />
                    {isLiked ? (
                        <AiTwotoneHeart size={20} color="#fa9090" onClick={onClickLike} />
                    ) : (
                        <AiOutlineHeart size={20} color="#fa9090" onClick={onClickLike} />
                    )}
                </div>
            </div>
            <p
                css={css`
                    padding: 0 1rem;
                    font-size: 0.9rem;
                    font-family: nexon-regular;
                `}
            >
                {content}
            </p>
            <div
                css={css`
                    display: flex;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                `}
            >
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    `}
                >
                    <AiOutlineHeart color="#fa9090" />
                    <p
                        css={css`
                            font-family: nexon-regular;
                            font-size: 0.8rem;
                            color: #fa9090;
                        `}
                    >
                        {likes}
                    </p>
                </div>
                <p
                    css={css`
                        font-family: nexon-regular;
                        font-size: 0.8rem;
                    `}
                >
                    {date?.split("_")[0]}
                </p>
            </div>
        </div>
    );
}
