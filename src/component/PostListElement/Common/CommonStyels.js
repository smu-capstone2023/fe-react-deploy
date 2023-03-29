import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CommonElementLayout = styled.div`

    display: flex;
    border-radius: 5px;
    padding: 0.5em;
    justify-content: space-between;
`;

export const CommonElementLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export const CommonBasicInfoField = styled.div`
    font-size: 0.7rem;
`;

export const CommonDepartmentName = styled.a`
    margin: 0 0.5em;
`;

export const CommonTitle = styled.a``;

export const CommonNumberOfCommnet = styled.a`
    color: red;
    margin: 0 0.5em;
`;

export const CreateDateField = styled.div`
    color: gray;
    font-size: 0.6em;
`;
