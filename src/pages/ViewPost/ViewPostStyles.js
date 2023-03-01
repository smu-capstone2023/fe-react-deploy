import styled from "styled-components";
import { COLORS } from "../../color";

export const ViewPostLayout = styled.div`
    display:flex;
    flex-direction: column;
    padding: 1em;
    height:100vh;
`;

export const WriterUserInfoLayout = styled.div`
display:flex;
width:100%;
`;

export const ProfileImageLayout = styled.div`
display:flex;
height: 4em;
width: 4em;
justify-content:center;
align-items:center;
`

export const UserAndPostInfoLayout = styled.div`
width:100%;
display:flex;
flex-direction: column;
justify-content:end;
padding: 0.5em;
`

export const UserNameFiled = styled.p`
    font-size:1em;
`;

export const CreateDateField = styled.p`
    font-size: 0.8em;
    color: gray;
`;

export const ProfileImage = styled.img`
    width:90%;
    height:90%;
    background: gray;
    border-radius: 5px;
`
export const ViewPostContentLayout = styled.div`
width:100%;
padding: 1em 0;
`;

export const PostTitleField = styled.h3`
padding: 0 0 0.5em 0;
`;

export const PostContentField = styled.p`
padding: 0.5em 0;
`;

export const ViewCommentLayout = styled.div`
width:100%;
height:100%;
background: #D9D9D9;
`;

export const EditPostButtonField = styled.div`
width: 5em;
padding:0.5em 0;
display: flex;
justify-content:center;
border-radius: 5px;
background: ${COLORS.logo};
color: white;
`