import React from "react";
import styled from "styled-components";
import { COLORS } from "../../color";
/**
 * @param boardList : {board_id: number, board_name: string}[]
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
                    if (item.board_id === parseInt(currentBoardId)) {
                        color = COLORS.logo;
                    } else {
                        color = "black";
                    }
                    return (
                        <BoardSelectdiv color={color} key={item.board_id} onClick={() => onClick(item.board_id)}>
                            {item.board_name}
                        </BoardSelectdiv>
                    );
                })}
        </BoardSelectBoxLayout>
    );
};

const BoardSelectBoxLayout = styled.div`
    overflow: scroll;
    white-space: nowrap;
    display: flex;
    border-bottom: 0.3px solid #b6b6b6;
    gap: 0.5rem;
    font-size: 1rem;

    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

const BoardSelectdiv = styled.div`
    color: ${(props) => props.color};
    display: flex;
    font-family: nexon-regular;
    padding: 0.8em 0em 1em 0em;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        margin-left: 0.3em;
    }
`;

export default BoardSelectBox;
