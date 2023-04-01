import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoticeElementLayout = styled.div`
    // border-bottom: solid 0.3px gray;
    display: flex;
    border-radius: 5px;
    padding: 0.8em;
    justify-content: space-between;
`;

export const NoticeElementLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export const NoticeBasicInfoField = styled.div`
    font-size: 0.7rem;
`;

export const NoticeDepartmentName = styled.a`
    margin: 0 0.5em;
`;

export const NoticeTitle = styled.a``;

export const NoticeNumberOfCommnet = styled.a`
    color: red;
    margin: 0 0.5em;
`;

export const CreateDateField = styled.div`
    color: gray;
    font-size: 0.6em;
`;
