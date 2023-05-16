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
    font-size: 23px;

    @media screen and (max-width: 1200px) {
        font-size: 21px;
        
    }
    
    @media screen and (max-width: 500px) {
        gap: .5rem;
        font-size: 18px;

    }
`;

const BoardSelectdiv = styled.div`
    display: flex;
    font-family: nexon-regular;
    padding: .8em 0em 1em 0em;

    @media screen and (max-width: 500px) {
        padding: .3em 0em .5em 0em;

    }
`;

export default BoardSelectBox;




