import React from "react";
import styled from "styled-components";

/**
 * @param boardList : {id: number, name: string}[]
 * @param onClick: () => {} 
 * @returns
 */

const  BoardSelectBox = ({boardList, onClick}) => {
    return(
    <BoardSelectBoxLayout>
        {boardList && boardList.map(item => (<BoardSelectdiv key={item.id} onClick={()=>onClick}>{item.name}</BoardSelectdiv>))}
    </BoardSelectBoxLayout>
    )
}

const BoardSelectBoxLayout = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 0.3px solid #b6b6b6;
    gap: 1rem;

    @media screen and (max-width: 1200px) {
        padding-top: .2rem;
        font-size: 0.8em;
        justify-content: center;

    }
    
    @media screen and (max-width: 500px) {
        padding-top: .2rem;
        font-size: 0.55em;
        justify-content: center;
        gap: .5rem;
    }
`;

const BoardSelectdiv = styled.div`
    display: flex;
    font-family: nexon-regular;
    padding: .8em 0em 1em 0em;

`;

export default BoardSelectBox;




