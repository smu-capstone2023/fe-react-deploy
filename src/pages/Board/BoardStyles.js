import styled from 'styled-components';
import { COLORS } from '../../color';

export const BoardLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 0.5px gray;
    
    padding: 10px;
    background-color: ${COLORS.background_color};
`;


export const Boardline = styled.div`
    margin 3rem;
    border: solid 0.5px #D9D9D9;
    border-radius: 0.6rem;
    padding-bottom: 10rem;
    max-width: 50rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

export const SignInnerBox = styled.div`

    
    border: solid 0.5px gray;
    border-radius: 50px;
    width: 22%;
    padding: 0.1rem;
    
`;

export const DefaultText = styled.p`
    padding: 5px;
    font-size: 0.9em;
`;

export const ChangeBoardOutBox = styled.p`
    display:flex;
    border-radius: 8px;
    border: solid 2.5px gray;
    width: 90%;
    justify-content: center;
    align-items: center;
`;

export const ChangeBoardInBox = styled.p`

    border-left: solid 0.5px lightgray;
    width: 15rem;
    text-align: center;
    
    padding: 0.5rem;
    font-weight: ${({ active }) => (active ? "bold" : "normal")};

`;

export const NavLinks = styled.p`
    color: black;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        border-bottom: 3px solide #01bf71;
    }
`;