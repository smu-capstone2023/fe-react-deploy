import styled from 'styled-components';
import { COLORS } from '../../color';

export const BoardLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 0.5px white;
    padding: 10px;
    background-color: ${COLORS.background_color};
    
    @media screen and (max-width: 800px) {
        
        background-color: white;

    }
`;

export const Boardline = styled.div`
    font-size: .8em;
    margin: 3rem;
    border: solid 0.5px ${COLORS.gray_button};
    border-radius: 3rem;
    padding-bottom: 10rem;
    max-width: 40rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1120px) {

        max-width: 35rem;

      }
    
    @media screen and (max-width: 970px) {

        max-width: 30rem;

      }

    @media screen and (max-width: 800px) {
        margin: 0rem;
        padding-bottom: 5rem;
        max-width: 25;
        width: 90%;
        border-radius: none;
        border: none;
    }

        @media screen and (max-width: 460px) {

        width: 100%;

    }

`;

export const BoardTableSchema = styled.div`
    display: flex;
    border-radius: 5px;
    padding: 1.1em 0;
    background: #f1f1f1;
    
    
`;

export const TableSchemaElement = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
    width: 8em;
    text-align: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
        font-size: .7rem;
    }

    @media screen and (max-width: 460px) {
        font-size: .6rem;
`;

export const TableTitleSchema = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
    width: 100%;
    text-align: left;
    text-indent: 35px;
    justify-content: center;

    @media screen and (max-width: 800px) {
        text-indent: 10px;
        font-size: .7rem;
    }

    @media screen and (max-width: 460px) {
        text-indent: 5px;
        font-size: .6rem;
    }
`;

export const BoardListLayout = styled.div`
    width: 85%;

    @media screen and (max-width: 800px) {
        width: 95%;
    }

        @media screen and (max-width: 530px) {
        width: 100%;
    }


`;

export const TitleAndToggle = styled.p`
    display: flex;
    align-items: center;
    width: 90%;
    flex-flow: wrap;

    @media screen and (max-width: 800px) {
        width: 100%;
        justify-content: space-between;
        margin-bottom: rem;
    }
`;

export const BoardTitle = styled.div`
    color: ${COLORS.logo};
    font-size: 1.5rem;
    font-weight: bold;
    width: 25%;
    padding: 1.3em;
    padding-right: 0em;
    padding-left: 0em;
    text-align: left;
    margin-right: .5em;
    
    @media screen and (max-width: 970px) {

    font-size: 1.3rem;

      }

    @media screen and (max-width: 800px) {
        width: 40%;
        // font-size: 1.3rem;
    }

        @media screen and (max-width: 530px) {
        font-size: 1.3rem;
                width: 100%;
    }
`;

export const ToggleBox = styled.div`
    border: solid 3px ${COLORS.gray_button};
    border-radius: 50px;
    width: 32%;

    @media screen and (max-width: 800px) {
        width: 50%;
    }

    @media screen and (max-width: 530px) {
        width: 100%;
    }
`;

export const BoardUtilsButtonsLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    padding: 1.5em 0;
    font-weight: 600;
    color: black;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        width: 100%;
        padding-bottom: 0px;
        
    }
    @media screen and (max-width: 460px) {
        width: 100%;
        padding-bottom: 0px;
        padding-top: 20px;
        
    }

    
`;

export const BoardUtilsButton = styled.div`
    margin 5px;
    border-radius: 12px;
    border: solid 3px ${COLORS.color_button};
    width: 4.9em;
    text-align: center;
    padding: 0.7em 0.5em;
    font-size: 0.8rem;

    @media screen and (max-width: 800px) {
        margin: 1rem 0;
        font-size: .7rem;        
    }

    @media screen and (max-width: 460px) {
        font-size: .6rem;
    }

`;

// export const SortUtilButtonLayout = styled.div`
//     display:flex;
//     flex-direction: row;

//     @media screen and (max-width: 800px) {
//         margin-top: 1rem;
//         justify-content: center;
//     }
// `;

export const ChangeBoardOutBox = styled.p`
    display:flex;
    border-radius: 30px;
    border: solid 3px #a8a8a8;
    width: 90%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 1rem 0;
    }
    
    @media screen and (max-width: 460px) {
    
        width: 90%;
    }

`;

export const ChangeBoardInBox = styled.p`
    width: 15rem;
    text-align: center; 
    padding: 0.5rem;
    font-weight: ${({ active }) => (active ? "bold" : "normal")};

    @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 0.8rem;
        padding: 0.5rem 0;
    }

     @media screen and (max-width: 460px) {
        font-size: .6rem;
    }
`;

export const Line = styled.div`
    margin: 2em;
    margin-bottom: 1rem;
    width: 90%;
    border-bottom: solid 1px ${COLORS.gray_button};

    @media screen and (max-width: 800px) {
        margin: 1rem 0;
    }
`;

export const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5em 1.5em 0 1.5em;
    width: 90%;   

    @media screen and (max-width: 800px) {
        width: 100%;
    }

    @media screen and (max-width: 460px) {
        margin-top: 0px;
    }


`;

export const SearchInput = styled.input`
    color: gray;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0.5em;
    width: 39%;
    border: solid 1.5px white;
    border-bottom: solid 1px rgba(128, 128, 128, 0.5);
    border-radius: 1px;

    @media screen and (max-width: 800px) {
        width: 55%;
        font-size: 0.7rem;
    }

    @media screen and (max-width: 460px) {
        // font-size: 0.6rem;
    }

`;