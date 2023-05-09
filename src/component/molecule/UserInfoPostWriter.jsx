import React from "react";
import styled from "styled-components";

import { BsPencilFill } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";


/**
 * @param userName: string
 * @param postId: number
 * @param commentId: number
 * @param fontSize: string
 * @param iconSize: string
 * @returns
 */

const UserInfoPostWriter = ({ userName, handleEditClick, handleDeleteClick, iconSize = 17, fontSize = '1rem' }) => {

    const handleEditClick = (postId) => {
        //alert 띄우기
        alert(`게시글 수정 ${postId}`);
      };
      
      const handleDeleteClick = (postId) => {
        alert(`게시글 삭제 ${postId}`);
      };
    
    return (
      <UserInfoPostWriterLayout style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BiUserCircle size={iconSize} style={{ marginRight: '8px', color: '#747474' }} />
          <div style={{ fontSize }}>{userName}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsPencilFill size={iconSize} style={{ marginRight: '8px', color: '#4169E1' }} onClick={handleEditClick} />
          <BiTrash size={iconSize} style={{ color: '#FF5A5A' }} onClick={handleDeleteClick} />
        </div>
      </UserInfoPostWriterLayout>
    );
  };
  
  const UserInfoPostWriterLayout = styled.div`
    background: #FFFFFF;
    padding: 1rem;
    border: 1px solid #FFFFFF;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'NEXON Lv1 Gothic';
  `;
  export default UserInfoPostWriter;