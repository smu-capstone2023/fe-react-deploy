/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Avatar from "component/Avatar";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";
interface Prop {
    username?: string;
    onClick_Heart?: () => void;
    isLiked?: boolean;
    onClick_Ellipsis?: () => void;
}

export default function PostHeader({ username = "알 수 없음", onClick_Heart = () => {}, onClick_Ellipsis = () => {}, isLiked = false }: Prop) {
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
                <AiTwotoneHeart style={{flex: 1}} size={25} color="#fa9090" onClick={onClick_Heart} />
            ) : (
                <AiOutlineHeart style={{flex: 1}} size={25} color="#fa9090" onClick={onClick_Heart} />
            )}
            <IoEllipsisVertical style={{flex: 1}} size={25} color="#888888" onClick={onClick_Ellipsis}/>
        </div>
    );
}
