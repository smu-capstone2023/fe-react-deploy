import styled from 'styled-components';
import { COLORS } from '../../color';

export const BoardLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 0.5px gray;
    padding: 10px;
    background-color: ${COLORS.background_color};
    // font-weight: ;
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
    width: 85%;
`;

export const BoardTitle = styled.div`
    color: ${COLORS.logo};
    font-size: 1.8rem;
    font-weight: bold;
    width: 28%;
    padding: 1.3em;
    padding-right: 0em;

`;

export const BoardUtilsButtonsLayout = styled.div`
    display: flex;
    width: 83%;
    padding: 1.5em 0;
    font-weight: 600;
    color: #6e6e6e;
    justify-content: end;
    
`;

export const BoardUtilsButton = styled.div`
    margin 0px;
    border-radius: 12px;
    border: solid 0.5px gray;
    width: 4.9em;
    text-align: center;
    padding: 0.7em;
    padding-right: 0.5em;
    padding-left: 0.5em;
    font-size: 0.8rem;

`;

export const ToggleBox = styled.div`

    
    border: solid 0.5px gray;
    border-radius: 50px;
    width: 20%;
    
`;

export const DefaultText = styled.p`
    padding: 5px;
    font-size: 0.9em;
`;

export const ChangeBoardOutBox = styled.p`
    display:flex;
    border-radius: 10px;
    border: solid 2.5px #a8a8a8;
    width: 90%;
    justify-content: center;
    align-items: center;
`;

export const ChangeBoardInBox = styled.p`

    border-right: solid 0.5px whitesmoke;
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

export const TitleAndToggle = styled.p`
    display: flex;
    align-items: center;
    width: 100%;

`;

export const Line = styled.div`
    margin: 2em;
    margin-bottom: 0;
    width: 90%;
    border-bottom: solid 0.5px gray;
`;