/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

interface Prop {
    commentCount?: number;
    likeCount?: number;
    date?: string;
}
export default function PostFooter({ commentCount = 0, likeCount = 0, date }: Prop) {
    return (
        <div
            css={css`
                display: flex;
                padding: 1rem;
                gap: 0.5rem;
            `}
        >
            <div
                css={css`
                    display: flex;
                    align-items: center;
                    gap: 0.2rem;
                `}
            >
                <AiOutlineMessage />
                <p
                    css={css`
                        font-family: nexon-regular;
                        font-size: 0.8rem;
                    `}
                >
                    {commentCount}
                </p>
            </div>
            <div
                css={css`
                    display: flex;
                    align-items: center;
                    gap: 0.2rem;
                `}
            >
                <AiOutlineHeart color="#fa9090" />
                <p
                    css={css`
                        color: #fa9090;
                        font-family: nexon-regular;
                        font-size: 0.8rem;
                    `}
                >
                    {likeCount}
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
    );
}
