import React from "react";
import styled from "styled-components";

import { BsPencilFill } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import Swal from "sweetalert2";
import { deleteComment } from "../../api/Comment/deleteComment";
/**
 * @param userName: string
 * @param postId: number
 * @param commentId: number
 * @param fontSize: string
 * @param iconSize: string
 * @param onClickDelete: () => void;
 * @param onClickEdit: () => void;
 * @param isShowEdit: boolean
 * @returns
 */

const UserInfoPostWriter = ({ userName, iconSize = 17, fontSize = "1em", onClickEdit, onClickDelete, isShowEdit }) => {
    return (
        <UserInfoPostWriterLayout style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <BiUserCircle size={iconSize} style={{ marginRight: "8px", color: "#747474", }} />
                <p style={{ fontSize: fontSize, fontFamily: "nexon-regular" }}>{userName}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                {isShowEdit && <BsPencilFill size={iconSize} style={{ marginRight: "8px", color: "#4169E1", cursor: "pointer" }} onClick={onClickEdit} />}
                <BiTrash size={iconSize} style={{ color: "#FF5A5A", cursor: "pointer" }} onClick={onClickDelete} />
            </div>
        </UserInfoPostWriterLayout>
    );
};

const UserInfoPostWriterLayout = styled.div`
    background: #ffffff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export default UserInfoPostWriter;
