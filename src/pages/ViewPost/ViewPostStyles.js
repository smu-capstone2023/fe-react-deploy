import styled from 'styled-components';
import { COLORS } from '../../color';

export const ViewPostMenuUI = styled.ul`
    position: absolute;
    top: 3rem;
    left: -9rem;
    width: 10rem;
    height: 8rem;
    display: block;
    // margin-left: 30em;
    // margin-top: 12em;
    //display: none;
`;

export const ViewPostMenuContent = styled.li`
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
    //border: solid 1px lightgray;
    width: 5%;
    height: 5%;
    float: left;
    margin-top: 0.5em;
`;

export const ViewPostMenuImgContainer = styled.div`
    //border: solid 1px lightgray;
    position: relative;
`;

export const ViewPostMenuImg = styled.img`
    // border: solid 1px lightgray;
    width: 100%;
    height: 100%;
    
`;

export const ReplyPostContainer = styled.div`
    border: solid 1px lightgray;
    min-height: 20vh;

`;

export const ViewPostLayout = styled.div`
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-direction: column;
    max-width: 60em;
    padding: 1em;
    margin: auto;
    margin-top: 3em;
    // height: 100vh;
    border: solid 1px lightgray;
    border-radius: 6px;
`;

export const WriterUserInfoLayout = styled.div`
    display: flex;
    width: 100%;
    // border: solid 1px gray;
    float: left;
`;

export const ProfileImageLayout = styled.div`
    display: flex;
    height: 4em;
    width: 4em;
    justify-content: center;
    align-items: center;
`;

export const UserAndPostInfoLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 0.5em;
    
`;

export const UserNameFiled = styled.p`
    color: gray;
    padding-bottom: 0.3em;
    padding-left: 0.1em;
    font-size: 1em;
`;

export const CreateDateField = styled.p`
    color: gray;
    padding-bottom: 0.2em;
    padding-left: 0.1em;
    font-size: 0.8em;
`;

export const ProfileImage = styled.img`
    width: 3em;
    height: 3em;
    border: solid 0.3px lightgray;
    border-radius: 70%;
    overflow: hidden;
    object-fit: cover;
    float: left;
`;
export const ViewPostContentLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 1000rem;
    min-height: 10rem;
    padding: 1rem 0;
    padding-left: 0.5rem;
`;

export const PostTitleField = styled.h3`
    display: table-cell;
    padding: 0 0 0.5em 0;
    vertical-align: middle;
`;

export const PostContentField = styled.p`
    padding: 0.5em 0;
`;

export const ViewCommentLayout = styled.div`
    width: 100%;
    height: 100%;
    background: #d9d9d9;
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
