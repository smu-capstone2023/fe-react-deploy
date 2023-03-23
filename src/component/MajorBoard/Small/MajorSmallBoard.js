import styled from 'styled-components';
import {COLORS} from '../../../color';

//학과
export const SmallBoardLayout = styled.div`
    max-width: 20rem;
    width: 80%;
    margin: 0 1rem;
    padding: 1.2rem;
    border: solid 0.5px ${COLORS.gray_button};
    border-radius: 5px;
    background-color: white;
    
    @media screen and (max-width: 1200px) {
        margin: 1rem 0;
    }
`;

export const SchoolBoardButtonLayout = styled.div`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
`;

export const SchoolBoardButtonIcon = styled.div`
    color: white;
`;

export const SchoolBoardTitle = styled.div`
    color: white;
`;

export const DetailBoardTitleWithMoreLayout = styled.div`
    margin-top: .5em;
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
`;

export const DetailBoardTitle = styled.p``;

export const ToggleBox = styled.div`

background-color: #90A8FF;
border-radius: 3px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem;

`;