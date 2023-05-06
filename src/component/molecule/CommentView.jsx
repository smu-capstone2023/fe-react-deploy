import React from "react";
import { IoChatboxOutline } from "react-icons/io5";

/**
 *
 * @param commentCount: number
 * @param fontSize: number
 * @param iconSize: number
 * @returns
 */
export const CommentView = ({ commentCount, fontSize = 17, iconSize = 17 }) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <IoChatboxOutline size={iconSize} color="#4169E1" />
            <span style={{ fontSize: fontSize, color: "#4169E1", marginLeft: 4, fontFamily: "nexon-regular" }}>{commentCount}</span>
        </div>
    );
};

export default CommentView;
