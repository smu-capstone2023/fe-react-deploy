import React from "react";
import Button from "../molecule/Button";
import InputTextAreaBox from "../molecule/InputTextAreaBox";
import styled from "styled-components";

/**
 *
 * @param onChangeComment {(value: string) => void}
 * @param onClickAddComment {() => void}
 * @returns
 */
const AddComment = ({ onChangeComment, onClickAddComment }) => {
    return (
        <>
            <AddCommentLayout>
                <InputTextAreaBox placeholder={"댓글 입력"} onChange={onChangeComment} background={"white"} height={"2.3rem"} autoHeight />
                <Button title={"댓글 추가"} onClick={onClickAddComment} width={"10rem"} height={"2.3rem"} fontSize={"16px"} />
            </AddCommentLayout>
        </>
    );
};

const AddCommentLayout = styled.div`
    display: flex;
    gap: 10px;
    padding: 1rem;
    margin: 0 1rem;
`;

export default AddComment;
