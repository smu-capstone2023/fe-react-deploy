import React from 'react';
import Notice from '../../component/PostListElement/Notice';
import {
    SchoolBoardButtonLayout,
    SchoolBoardButtonIcon,
    SchoolBoardTitle,
    SmallBoardLayout,
    HomeLayout,
    DetailBoardTitle,
    DetailBoardTitleWithMoreLayout,
    ShowMoreButton,
} from './HomeStyles';
import { TiArrowForward } from 'react-icons/ti';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MajorBoardSmall from '../../component/MajorBoard/Small';
import { getBoardListFromMajorId } from '../../api/board/boardList';
import '../../App.css'

const SchoolBoard = () => {
    const [boardList, setBoardList] = useState([]);
    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_SERVER_URL}:8001/board/preview?board_id=${process.env.REACT_APP_SCHOOL_BOARD_ID}&limit_post_num=5`,
                {
                    headers: {
                        Authorization: localStorage.getItem('access_token'),
                    },
                }
            )
            .then((response) => {
                setBoardList(response.data);
            })
            .catch((response) => {
                localStorage.clear();
            });
    }, []);

    return (
        <>
            <SmallBoardLayout>
                <BoardBannerButton title='학교게시판' backgroundColor={'#FF8686'} boardId={process.env.REACT_APP_SCHOOL_BOARD_ID} />
                <DetailBoardTitleWithMore
                    boardIcon={<TiArrowForward />}
                    boardTitle='학사 공지'
                    boardId={process.env.REACT_APP_SCHOOL_BOARD_ID}
                />

                {boardList.map((postElement) => {
                    return (
                        <Notice
                            key={postElement.post_id}
                            departmentName={postElement.nickName}
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

const DetailBoardTitleWithMore = ({ boardIcon, boardTitle, boardId }) => {
    return (
        <DetailBoardTitleWithMoreLayout>
            <DetailBoardTitle>
                {boardIcon} {boardTitle}
            </DetailBoardTitle>
            <ShowMoreButton to={`/board/${boardId}`}>+ 더보기</ShowMoreButton>
        </DetailBoardTitleWithMoreLayout>
    );
};

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

const Home = () => {
    const majorIdTitleList = JSON.parse(localStorage.getItem('major_options'));

    const [fade, setFade] = useState('');
    useEffect(()=>{
        setTimeout(() => {
            setFade('HomeEnd')
        }, 100);
        return (()=>{setFade('')}) 
    },[])

    return (
        <>
            <HomeLayout className={`HomeStart ${fade}`}>
                <SchoolBoard />
                {majorIdTitleList && (
                    <MajorBoardSmall
                        title={majorIdTitleList[1].label}
                        boardId={majorIdTitleList[1].freeBoard}
                        majorOptions={majorIdTitleList}
                    />
                )}
            </HomeLayout>
        </>
    );
};

export default Home;
