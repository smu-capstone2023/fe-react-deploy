import styled from 'styled-components';
import { COLORS } from '../../color';

export const BoardLayout = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
`;

export const BoardTableSchema = styled.div`
    display: flex;
    border-radius: 5px;
    padding: 0.8em 0;
    background: #f1f1f1;
`;

export const TableSchemaElement = styled.div`
    font-size: 0.8rem;
    width: 8em;
    text-align: center;
    justify-content: center;
`;

export const TableTitleSchema = styled.div`
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
    justify-content: center;
`;

export const BoardListLayout = styled.div`
    width: 80%;
`;

export const BoardTitle = styled.div`
    color: ${COLORS.logo};
    font-size: 1.8rem;
    font-weight: bold;
    width: 80%;
    padding-top: 3em;
`;

export const BoardUtilsButtonsLayout = styled.div`
    width: 80%;
    padding: 1em 0;
`;

export const WritePostButton = styled.div`
    border-radius: 5px;
    border: solid 0.5px gray;
    width: 4em;
    text-align: center;
`;
