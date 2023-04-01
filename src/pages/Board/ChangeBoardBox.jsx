import React, { useState, useEffect } from 'react';
import { ChangeBoardInBox, ChangeBoardOutBox } from './BoardStyles';
import { getBoardListFromMajorId } from '../../api/board/boardList';

const ChangeBoardBox = ({ majorId }) => {
    const [boardList, setBoardList] = useState();
    useEffect(() => {
        if (majorId) {
            getBoardListFromMajorId(majorId).then((response) => {
                setBoardList(response);
            });
        }
    }, []);

    return (
        <>
            <ChangeBoardOutBox>
                {boardList &&
                    boardList.map((board) => {
                        return (
                            <ChangeBoardInBox
                                key={board.board_id}
                                onClick={() => {
                                    window.location.href = `${board.board_id}`;
                                }}
                            >
                                {board.board_name.split('-')[1].split('게시판')[0]}
                            </ChangeBoardInBox>
                        );
                    })}
            </ChangeBoardOutBox>
        </>
    );
};

export default ChangeBoardBox;
