import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoChatboxOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import styled from "styled-components";

/**
 * @param userName: string
 * @param fontSize: string
 * @param iconSize: string
 * @param onClickButton: () => void
 * @returns
 */

//TODO: 댓글 어떻게 할지 나중에 고민
const UserInfoPostReader = ({ userName, iconSize = 17, fontSize = "1rem", onClickLike }) => {
    return (
        <UserInfoPostReaderLayout style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <BiUserCircle size={iconSize} style={{ marginRight: "8px", color: "#747474" }} />
                <p style={{ fontSize, fontFamily: "nexon-regular" }}>{userName}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <AiOutlineLike size={iconSize} style={{ color: "#4169E1", cursor: "pointer" }} onClick={onClickLike} />
                {/* <IoChatboxOutline size={iconSize} style={{ color: "#4169E1" }} onClick={handleCommentClick} /> */}
            </div>
        </UserInfoPostReaderLayout>
    );
};

const UserInfoPostReaderLayout = styled.div`
    background: #ffffff;
    border: 1px solid #ffffff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export default UserInfoPostReader;
