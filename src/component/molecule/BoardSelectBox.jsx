import React from "react";
import styled from "styled-components";

/**
 * @param boardList : {id: number, name: string}[]
 * @param onClick: () => {} 
 * @returns
 */

const BoardSelectBox = () => {
    const boardList = [{id:0, name: '자유게시판'},{id:1, name: '비밀게시판'},{id:2, name: '공지게시판'},{id:3, name: '홍보게시판'}];
    return(
    <BoardSelectBoxLayout>
        {boardList && boardList.map(item => (<BoardSelectdiv key={item.id} onClick={()=>alert(item.id)}>{item.name}</BoardSelectdiv>))}
    </BoardSelectBoxLayout>
    )
}

const BoardSelectBoxLayout =styled.div`
    display: flex;
    width: 100%;
    justify-content: start;
    border-bottom: 0.3px solid #B6B6B6;
`

const BoardSelectdiv =styled.div`
    display: flex;
    justify-content: center;
    width: 13%;
    padding-bottom: .6rem;
    font-family: nexon-regular;

    @media screen and (max-width: 1200px) {
        width: 16%;
        font-size: .9em;    
     }

    @media screen and (max-width: 880px) {           
        width: 90%;
        padding-bottom: .8rem;
        font-size: .7em;
        justify-content: center;
    }

    @media screen and (max-width: 400px) {           
        width: 90%;
        padding-bottom: .7rem;
        font-size: .6em;
        justify-content: center;
    }
`

export default BoardSelectBox;




