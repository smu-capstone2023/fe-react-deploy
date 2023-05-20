import React from "react";
import styled from "styled-components";
import { COLORS } from "../../color";
/**
 * @param boardList : {id: number, name: string}[]
 * @param onClick: () => {}
 * @param currentBoardId: number
 * @returns
 */

const BoardSelectBox = ({ boardList, onClick, currentBoardId }) => {
    let color = "black";
    return (
        <BoardSelectBoxLayout>
            {boardList &&
                boardList.map((item) => {
                    if (item.id === currentBoardId) {
                        color = COLORS.logo;
                    } else {
                        color = "black";
                    }
                    return (
                        <BoardSelectdiv color={color} key={item.id} onClick={() => onClick}>
                            {item.name}
                        </BoardSelectdiv>
                    );
                })}
        </BoardSelectBoxLayout>
    );
};

const BoardSelectBoxLayout = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 0.3px solid #b6b6b6;
    gap: 1rem;
    font-size: 22px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 500px) {
        gap: 0.5rem;
        font-size: 15px;
    }
`;

const BoardSelectdiv = styled.div`
    color: ${(props) => props.color};
    display: flex;
    font-family: nexon-regular;
    padding: 0.8em 0em 1em 0em;

    @media screen and (max-width: 500px) {
        margin-left: 0.3em;
    }
`;

export default BoardSelectBox;
