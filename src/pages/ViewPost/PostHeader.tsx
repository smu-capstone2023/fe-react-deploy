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
    isAuthor?: boolean;
    userProfile?: string;
}

export default function PostHeader({
    username = "알 수 없음",
    onClickHeart = () => {},
    isLiked = false,
    boardId,
    postId,
    isAuthor,
    userProfile,
}: Prop) {
    return (
        <div
            css={css`
                display: flex;
                align-items: center;
                padding: 1rem;
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
                <Avatar size={45} profileUrl={userProfile} />
                <p
                    css={css`
                        font-family: nexon-regular;
                        font-size: 1.3rem;
                    `}
                >
                    {username}
                </p>
            </div>
            <div
                css={css`
                    display: flex;
                    position: relative;
                `}
            >
                {isLiked ? (
                    <AiTwotoneHeart style={{ flex: 1 }} size={25} color="#fa9090" onClick={onClickHeart} />
                ) : (
                    <AiOutlineHeart style={{ flex: 1 }} size={25} color="#fa9090" onClick={onClickHeart} />
                )}
                <DetailFunction size={25} color="#888888" boardId={boardId} postId={postId} isAuthor={isAuthor} />
            </div>
        </div>
    );
}
