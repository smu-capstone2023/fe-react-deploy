import React from "react";
import styled from "styled-components";
import TextField from "component/TextField";
import { AiOutlineSmile } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
/**
 *
 * @param onChangeComment {(value: string) => void}
 * @param onClickAddComment {() => void}
 * @returns
 */

const AddComment = ({ onChangeComment, onClickAddComment, onClickOpenEmoticonView, inputComment}) => {
    return (
        <>
            <AddCommentLayout>
                <TextFieldWrapper>
                    <TextField color={"gray"} placeholder={"댓글 입력"} onChange={(e)=>{onChangeComment(e.target.value)}} value={inputComment}></TextField>
                </TextFieldWrapper>
                <ButtonWrapper>
                    <EmoticonViewButton onClick={onClickOpenEmoticonView}/>
                    <CommentSendButton onClick={onClickAddComment}/>
                </ButtonWrapper>
            </AddCommentLayout>
        </>
    );
};

const AddCommentLayout = styled.div`
    display: flex;
    padding: 1.5rem;
    width: 100%;
    gap: 10px;
    flex: 1;
`;

const TextFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const EmoticonViewButton = styled(AiOutlineSmile)`
    display: flex;
    color: #4169E1;
    width: 24px;
    height: 24px;
`;

const CommentSendButton = styled(IoSend)`
    display: flex;
    color: #4169E1;
    transform: rotate(-45deg);
    width: 20px;
    height: 20px;
    margin: 0 0 5px 0;
`;

export default AddComment;