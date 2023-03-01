import styled from 'styled-components';
import { COLORS } from '../../color';

export const WritePostNameInputText = styled.input`
    border-radius: 5px;
    border: solid 0.5px gray;
    height: 3em;
    padding: 1em;
    font-weight: bold;
`;

export const WritePostContentInputText = styled.textarea`
    border-radius: 5px;
    border: solid 0.5px gray;
    height: 25em;
    padding: 1em;
`;

export const AddPostLayout = styled.div`
    display: flex;
    justify-content: center;
`;

export const WritePostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
    margin-top: 3em;
`;

export const HideWriterAndCompleteButtonLayout = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CompletePostButtonContainer = styled.button`
    width: 10em;
    height: 3em;
    background: ${COLORS.logo};
    border: none;
    border-radius: 5px;
    color: white;
`;

export const Blank1em = styled.div`
    padding: 0.5em 0;
`;
