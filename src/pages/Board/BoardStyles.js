import styled from 'styled-components';
import { COLORS } from '../../color';

export const BoardLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 0.5px white;
    padding: 10px;
    background-color: ${COLORS.background_color};
`;

export const Boardline = styled.div`
    margin 3rem;
    border: solid 0.5px ${COLORS.gray_button};
    border-radius: 0.6rem;
    padding-bottom: 10rem;
    max-width: 50rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }

    @media screen and (max-width: 360px) {
        width: 100%;
      }
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
    text-align: left;
    text-indent: 35px;
    justify-content: center;
`;

export const BoardListLayout = styled.div`
    width: 85%;
`;

export const TitleAndToggle = styled.p`
    display: flex;
    align-items: center;
    width: 90%;
    flex-flow: wrap;

    

`;

export const BoardTitle = styled.div`
    color: ${COLORS.logo};
    font-size: 1.8rem;
    font-weight: bold;
    width: 21.6%;
    padding: 1.3em;
    padding-right: 0em;
    padding-left: 0em;
    text-align: left;

    @media screen and (max-width: 768px) {
        width: 50%;
        
    }

    @media screen and (max-width: 360px) {
        width: 100%;
        text-align: center;
        font-size: 2rem;
    }

`;

export const ToggleBox = styled.div`

    
    border: solid 3px ${COLORS.gray_button};
    border-radius: 50px;
    width: 32%;
    

    @media screen and (max-width: 768px) {
        width: 50%;
        
    }

    @media screen and (max-width: 410px) {
        width: 100%;
        margin-bottom: 1rem;
        
    }
    

`;

export const BoardUtilsButtonsLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 83%;
    padding: 1.5em 0;
    font-weight: 600;
    color: #6e6e6e;
    justify-content: space-between;
`;

export const BoardUtilsButton = styled.div`
    margin 5px;
    border-radius: 12px;
    border: solid 3px ${COLORS.color_button};
    width: 4.9em;
    text-align: center;
    padding: 0.7em 0.5em;
    font-size: 0.8rem;
`;

export const SortUtilButtonLayout = styled.div`
display:flex;
flex-direction: row;
`;


export const ChangeBoardOutBox = styled.p`
    display:flex;
    border-radius: 30px;
    border: solid 3px #a8a8a8;
    width: 90%;
    justify-content: center;
    align-items: center;
`;

export const ChangeBoardInBox = styled.p`
    width: 15rem;
    text-align: center; 
    padding: 0.5rem;
    font-weight: ${({ active }) => (active ? "bold" : "normal")};

`;


export const Line = styled.div`
    margin: 2em;
    margin-bottom: 0;
    width: 90%;
    border-bottom: solid 3px ${COLORS.gray_button};
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5em 1.5em 0 1.5em;
  width: 90%;   
`;

export const SearchInput = styled.input`
  color: gray;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.5em;
  width: 39%;
  border: solid 3px gray;
  border-radius: 30px;
`;