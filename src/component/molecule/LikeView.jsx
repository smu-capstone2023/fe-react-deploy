import React from "react";
import { AiOutlineLike } from "react-icons/ai";

/**
 *
 * @param likeCount : number
 * @param fontSize : number
 * @param iconSize : number
 * @returns
 */
export const LikeView = ({ likeCount, fontSize = 12, iconSize = 12 }) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <AiOutlineLike size={iconSize} color="#FF5A5A" />
            <span style={{ fontSize: fontSize, color: "#FF5A5A", marginLeft: 4 }}>{likeCount}</span>
        </div>
    );
};

export default LikeView;
