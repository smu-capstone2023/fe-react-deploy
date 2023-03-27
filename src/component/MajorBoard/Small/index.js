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
    const [preview, setPreview] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/preview?board_id=${boardId}&limit_post_num=5`,
            {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                }
            })
            .then((response) => {
                setPreview(response.data);
                console.log(response.data);
            })
            .catch((response) => console.log(response));
    }, [preview.length]);

    return (
        <>
            <SmallBoardLayout>
                <BoardBannerButton title={title} backgroundColor={'#A9D3F2'} boardId={boardId} />

                {preview.map((postElement) => {
                    return (
                        <Common
                            key={postElement.post_id}
                            title={postElement.title}
                            numberOfComment={postElement.comments}
                            createDate={postElement.created_time}
                            postId={postElement.post_id}
                        />
                    );
                })}
            </SmallBoardLayout>
        </>
    );
};

export default MajorBoardSmall;
