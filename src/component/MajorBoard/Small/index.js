import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SchoolBoardButtonIcon, SchoolBoardTitle, SmallBoardLayout, SchoolBoardButtonLayout } from './MajorSmallBoard';
import { TiArrowForward } from 'react-icons/ti';
import Common from '../../../component/PostListElement/Common';
const BoardBannerButton = ({ title, boardId, backgroundColor }) => {
    return (
        <>
            <SchoolBoardButtonLayout
                backgroundColor={backgroundColor}
                onClick={() => {
                    window.location.href = `/board/${boardId}`;
                }}
            >
                <SchoolBoardButtonIcon>
                    <TiArrowForward size={'1.5em'} />
                </SchoolBoardButtonIcon>
                <SchoolBoardTitle>{title}</SchoolBoardTitle>
            </SchoolBoardButtonLayout>
        </>
    );
};

const MajorBoardSmall = ({ title, boardId }) => {
    const [boardList, setBoardList] = useState([]);
    const detailMajorId = boardId.slice(0, 3);
    const detailBoardId = boardId.slice(3, 6);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/${detailMajorId}/${detailBoardId}/list`, {
                headers: {
                    email: localStorage.getItem('email'),
                    // listsize: 4,
                },
            })
            .then((response) => {
                setBoardList(response.data.postList);
            })
            .catch((response) => console.log(response));
    }, [boardList.length]);

    return (
        <>
            <SmallBoardLayout>
                <BoardBannerButton title={title} backgroundColor={'#90A8FF'} boardId={boardId} />

                {boardList.map((postElement) => {
                    return (
                        <Common
                            key={postElement.id}
                            title={postElement.title}
                            numberOfComment={postElement.commentNum}
                            createDate={postElement.createDate}
                            postId={postElement.id + ''}
                        />
                    );
                })}
            </SmallBoardLayout>
        </>
    );
};

export default MajorBoardSmall;
