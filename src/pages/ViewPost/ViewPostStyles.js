import styled from 'styled-components';
import { COLORS } from '../../color';
import { AiTwotoneLike } from 'react-icons/ai';
import { CiUser } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { FaReply } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";



export const ViewPostMenuUI = styled.ul`
    position: absolute;
    top: 3rem;
    left: -7.8rem;
    width: 10rem;
    height: 8rem;
    display: block;
    // margin-left: 30em;
    // margin-top: 12em;
    //display: none;
`;

export const ViewPostMenuContent = styled.li`
    position: relative;
    z-index: 1;
    width: 10rem;
    height: 2.1rem;
    text-align: center;
    // margin-left: 2.5rem;
    padding: 0.3rem;
    list-style-type: none;
    border: solid 0.05em white;
    border-radius: 0.2rem;
    background: ${COLORS.logo};
    color: white;
    // padding: 1em;

`;

export const ViewPostMenuLayout = styled.ul`
    background: lightgray;
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 20%;
    display: block;
    margin-left: 30em;
    margin-top: 12em;
    // display: none;
`;

export const ViewPostMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 1.5;
    margin-top: 0.5em;
    margin-right: 2em;
`;

export const ViewPostMenuImgContainer = styled.div`
    //border: solid 1px lightgray;
    margin-top: 1em;
    position: relative;
`;

export const ViewPostMenuImg = styled(HiMenuAlt3)`
    // border: solid 1px lightgray;
    size: 100;
    height: 100%;
    width: 100%;
    color: #5f5f67;
`;

export const ViewPostLayout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 60em;
    padding: 1em;
    margin: auto;
    margin-top: 3em;
    // height: 100vh;
    border: solid 1px lightgray;
    border-radius: 6px;
    background-color: white;
    @media (max-width: 970px) {
        min-width: 0;
    }
`;

export const ViewPostBackground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: ${COLORS.background_color};
`;

export const WriterUserInfoLayout = styled.div`
    display: flex;
    width: 100%;
    // border: solid 1px gray;
    float: left;
`;

export const ProfileImageLayout = styled.div`
    display: flex;
    flex: 1;
    height: 4em;
    width: 4em;
    margin-left: 2em;
    // justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        margin-left: 1em;
    }
`;

export const UserAndPostInfoLayout = styled.div`
    flex: 16;
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: end;
    padding: 0.5em;
    padding-left: 0.5em;
    @media (max-width: 700px){
        font-size: 0.75em;
        margin-top: 0.7em;
    } 
`;

export const UserNameFiled = styled.p`
    color: #060606;
    padding-bottom: 0.3em;
    padding-left: 0.1em;
    font-size: 1em;
`;

export const CreateDateField = styled.p`
    color: gray;
    padding-bottom: 0.2em;
    padding-left: 0.1em;
    font-size: 0.8em;
    @media (max-width: 430px) {
        font-size: 0.65em;
    }
`;

export const ProfileImage = styled(CiUser)`
    width: 2.5em;
    height: 2.5em;
    padding: 0.3em;
    border: solid 0.3px lightgray;
    border-radius: 70%;
    overflow: hidden;
    object-fit: cover;
    color: gray;
`;
export const ViewPostContentLayout = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 90%;
    min-height: 10rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    padding: 2rem 0;
    @media (max-width: 970px) {
        width: 86%;
    }
    @media (max-width: 700px) {
        margin-left: 2rem;
        margin-right: 2rem;
        width: 88%;
    }
    @media (max-width: 600px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }

`;

export const PostTitleBorderLayout = styled.div`
    border-bottom: solid 0.05em lightgray;
    margin-top:
    width: 50rem;
`;

export const PostTitleField = styled.h3`
    display: table-cell;
    padding: 0 0 0.3em 0;
    vertical-align: middle;
    color: #060606;
    @media (max-width: 970px) {
        font-size: 0.95em;
    }
`;

export const PostContentField = styled.p`
    white-space: pre-wrap;
    padding: 2em 0;
    color: #060606;
    @media (max-width: 970px) {
        font-size: 0.95em;
    }
`;

export const PostViewAndLikeContainer = styled.div`
    display: flex;
    padding: 0.3em;
    margin: 0.5em;
    font-size: 0.9em;
    @media (max-width: 750px) {
        font-size: 0.7em;
    }
`;

export const PostViewResponseContent = styled.p`
    min-width: 3rem;
    // margin-right: 0.3rem;
    @media (max-width: 759px) {
        min-width: 2rem;
        font-size: 0.7em;
    }
`;

export const PostViewNumberLayout = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    margin-top: 0.5em;
    margin-left: 2rem;
    color: gray;
    flex: 1;
`;

export const PostLikeNumberLayout = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    margin-top: 0.5em;
    margin-left: 1em;
    color: #486EF7;
    flex: 10;
`;

export const PostLikeButtonLayout = styled(AiTwotoneLike)`
    display: flex;
    justify-content: flex-start;
    size: 60;
    color: #90A8FF;
    margin-right: 0.3rem;
    margin-top: 0.2rem;
`;


export const WriteCommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: auto;
    inline-height: auto;
    min-height: 2vh;
    max-width: 56rem;
    padding: 0.1rem;
    //background: lightgray;
    border-bottom: solid 0.05em lightgray;
    border-radius: 0.5em;
    margin: 0.7rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    @media (max-width: 445px) {
        margin-right: 0;
    }
`;

export const WriteCommentLayout = styled.textarea`
    display: flex;
    flex: 9;
    white-space: pre-line;
    min-height: 1vh;
    width: 85%;
    padding: 1rem;
    border: none;
    font-size: 1em;
    word-break: keep-all;
    overflow: hidden;
    resize: none;
    font-family: "NOTOSANSKR-REGULAR";
    :focus {
        outline: none;
    }
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
    &::-focus {
        outline: 1px solid gray;
    }
    @media (max-width: 700px) {
        font-size: 0.75em;
    }
`;

export const UploadCommentLayout = styled.div`
    display: flex;
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0.4rem;
    width: 15%;
    min-width: 2rem;
    max-height: 3rem;
    height: 6vh;
    background: ${COLORS.logo};
    color: white;
    border-radius: 2em;
    @media (max-width: 660px) {
        font-size: 0.78em;
    }
    @media (max-width: 400px) {
        font-size: 0.5em;
    }
`;

export const AnonymousCommentCheckContent = styled.p`
    color: gray;
    font-size: 0.8em;
    margin-top: 1.4rem;
    margin-right: 0.5rem;
    @media (max-width: 700px) {
        font-size: 0.65em;
    }
`;

export const AnonymousCommentCheckButton = styled.input`
    display: flex;
    width: 1rem;
    height: 1rem;
    background: lightgray;
    margin-top: 1.4rem;
    margin-right: 0.5rem;
    @media (max-width: 700px) {
        width: 0.6rem;
        height: 0.6rem;
        margin-top: 1.5rem;
    }
`;

export const ViewCommentMenuLayout = styled.div`
    border-radius: 0.3em;
    width: 1.5rem;
    height: 1.5rem;
    background: #f5f5f5;
    //background: white;
    margin: 0.3rem;
    margin-top: 0.3rem;
    float: right;
`;

export const CommentLikeIcon = styled(AiFillLike)`
    width: 100%;
    height: 100%;
    padding: 0.2em;
    color: ${COLORS.logo};
`;

export const CommentReplyIcon = styled(FaReply)`
    width: 100%;
    height: 100%;
    padding: 0.2em;
    color: #4e4c54;
`;

export const CommentMenuIcon = styled(FaPlus)`
    width: 100%;
    height: 100%;
    padding: 0.2em;
    color: #4e4c54;
`;

export const ViewCommentContainer = styled.div`
    border-top: solid 0.05em lightgray;
    //border-bottom: solid 0.1em lightgray;
    padding: 0.3rem;
    min-height: 10vh;
    margin-right: 2rem;
    margin-left: 2rem;
    // display: ${props => (props.visible ? 'block' : 'none')}
`;



export const ViewCommentUserImgLayout = styled(CiUser)`
    border: solid 0.05em lightgray;
    border-radius: 2rem;
    color: gray;
    padding: 0.3em;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.2rem;
    float: left;
`;

export const ViewCommentUserNameLayout = styled.p`
    color: #060606;
    height: 2rem;
    margin: 0.2rem;
    margin-left: 3rem;
    padding: 0.2rem;
    @media (max-width: 700px){
        font-size: 0.75em;
    } 
`;


export const ViewCommentLayout= styled.div`
    position: relative;
    white-space: pre-line;
    //border: solid 0.05em lightgray;
    //border-radius: 0.3rem;
    color: #060606;
    padding: 0.3rem;
    height: auto;
    width: 84%;
    min-height: 4vh;
    max-height: 1000rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    margin-left: 3rem;
    font-size: 0.9em;
    word-break: keep-all;
    overflow: hidden;
    resize: none;
    :focus {
        outline: none;
    }
`;


export const ReplyPostContainer = styled.div`
    //border: solid 1px lightgray;
    min-height: 5vh;
    margin-left: 3rem;
`;

export const ReplyPostLayout = styled.div`
    border: solid 1px lightgray;
    border-radius: 0.3em;
    min-height: 1vh;
    margin: 1.5rem;
    margin-left: 0;
    padding: 0.3rem;
    font-size: 0.9em;
`;

export const EditPostButtonField = styled.div`
    width: 5em;
    padding: 0.5em 0;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background: ${COLORS.logo};
    color: white;
`;
