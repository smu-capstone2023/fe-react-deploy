/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Avatar from "component/Avatar";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import DetailFunction from "./DetailFunction";

interface Prop {
    username?: string;
    onClickHeart?: () => void;
    isLiked?: boolean;
    boardId?: string;
    postId?: string;
    userId?: string;
    isAuthor?: boolean;
}

export default function PostHeader({ username = "알 수 없음", onClickHeart = () => {}, isLiked = false, boardId, postId, userId, isAuthor }: Prop) {
    return (
        <div
            css={css`
                display: flex;
                align-items: center;
                padding: 1rem;
                position: relative;
            `}
        >
            <div
                css={css`
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                    flex: 8;
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
                <AiTwotoneHeart style={{ flex: 1 }} size={25} color="#fa9090" onClick={onClickHeart} />
            ) : (
                <AiOutlineHeart style={{ flex: 1 }} size={25} color="#fa9090" onClick={onClickHeart} />
            )}
            <DetailFunction size={25} color="#888888" boardId={boardId} postId={postId} userId={userId} isAuthor={isAuthor} />
        </div>
    );
}
