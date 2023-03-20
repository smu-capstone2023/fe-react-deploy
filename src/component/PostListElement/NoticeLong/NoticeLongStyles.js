import styled from "styled-components"
import {Link} from 'react-router-dom';

export const NoticeElementLayout = styled.div`
display: flex;
border-radius: 5px;
padding: 1.2em 0;
border-bottom: solid 0.3px gray;
`;

export const NoticeElementLink = styled(Link)` 
    text-decoration: none;
`;

export const NoticeBasicInfoField = styled.div`
    font-size: 0.8rem;
    width:100%;
    text-indent: 35px;
`;


export const NoticeTitle = styled.a`
color: black;
`;

export const NoticeNumberOfComment = styled.a`
    margin:0 0.5em;
    color: red;
`;

export const CreateDateField = styled.div`
    color: gray;  
    font-size: 0.6rem;
    width: 8em;
    text-align: center;
    justify-content:center;
`;


export const NumberOfViewsField = styled.div`
width: 8em;
font-size: 0.8rem;
width: 8em;
text-align: center;
justify-content:center;
`;


export const WriterNameField = styled.div`
font-size: 0.8em;
width: 8em;
justify-content: center;
text-align: center;

`;