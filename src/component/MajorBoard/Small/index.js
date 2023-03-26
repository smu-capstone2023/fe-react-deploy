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


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/post_list/${boardId}`, {
                
                
                headers: {
                    Authorization: localStorage.getItem('access_token')
                    // listsize: 4,
                },
            })
            .then((response) => {
                setBoardList(response.data.postList);
                console.log(response.data);
            })
            .catch((response) => console.log(response));
    }, [boardList.length]);

    return (
        <>
            <SmallBoardLayout>
                <BoardBannerButton title={title} backgroundColor={'#A9D3F2'} boardId={boardId} />

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
