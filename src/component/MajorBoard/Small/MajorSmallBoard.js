import styled from 'styled-components';

export const SmallBoardLayout = styled.div`
    max-width: 500px;
    width: 80%;
    margin: 0 1rem;
    padding: 1.2rem;
    border: solid 0.5px gray;
    border-radius: 5px;
    @media screen and (max-width: 1000px) {
        margin: 1rem 0;
    }
`;

export const DetailBoardTitleWithMoreLayout = styled.div`
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
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
