import React from "react";
import { IoChatboxOutline } from "react-icons/io5";

/**
 *
 * @param commentCount: number
 * @param fontSize: number
 * @param iconSize: number
 * @returns
 */
export const CommentView = ({ commentCount, fontSize = 12, iconSize = 12 }) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <IoChatboxOutline size={iconSize} color="#4169E1" />
            <span style={{ fontSize: fontSize, color: "#4169E1", marginLeft: 4 }}>{commentCount}</span>
        </div>
    );
};

export default CommentView;
