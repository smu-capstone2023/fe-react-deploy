import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoChatboxOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import styled from "styled-components";


/**
 * @param userName: string
 * @param postId: number
 * @param commentId: number
 * @param fontSize: string
 * @param iconSize: string
 * @returns
 */

const UserInfoPostReader = ({ userName, iconSize = 17, fontSize = '1rem', postId, commentId }) => {

  const handleLikeClick = () => {
    alert(`좋아요 눌림 ${postId}`);
    };
  
  const handleCommentClick = () => {
    alert(`댓글달기 눌림 ${postId}`);
    };
    
    return (
      <UserInfoPostReaderLayout style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'nexon-regular' }}>
          <BiUserCircle size={iconSize} style={{ marginRight: '8px', color: '#747474' }} />
          <div style={{ fontSize }}>{userName}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AiOutlineLike size={iconSize} style={{ marginRight: '8px', color: '#4169E1' }} onClick={handleLikeClick} />
          <IoChatboxOutline size={iconSize} style={{ color: '#4169E1' }} onClick={handleCommentClick} />
        </div>
      </UserInfoPostReaderLayout>
    );
  };
  
  const UserInfoPostReaderLayout = styled.div`
    background: #FFFFFF;
    padding: 1rem;
    border: 1px solid #FFFFFF;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'nexon-regular';
  `;
  export default UserInfoPostReader;