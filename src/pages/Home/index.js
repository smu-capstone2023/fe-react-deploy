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
import { setUserMajorListInLocalStorage } from '../../api/auth/usermajors';

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
                <BoardBannerButton title='학교게시판' backgroundColor={'#FF8686'} boardId={'1/3'} />
                <DetailBoardTitleWithMore boardIcon={<TiArrowForward />} boardTitle='학사 공지' boardId={'1/3'} />

                {boardList.map((postElement) => {
                    return (
                        <Notice
                            key={postElement.post_id}
                            // TODO: 필요성 의문
                            ///departmentName={postElement.nickName}
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
            <ShowMoreButton to={`/board/1/3`}>+ 더보기</ShowMoreButton>
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
    useEffect(() => {
        if (localStorage.getItem('access_token')) setUserMajorListInLocalStorage(localStorage.getItem('access_token'));
    }, []);

    const majorIdTitleList = JSON.parse(localStorage.getItem('major_options'));
    return (
        <>
            <HomeLayout>
                <SchoolBoard />
                {majorIdTitleList ? (
                    majorIdTitleList[1] ? (
                        <MajorBoardSmall
                            title={majorIdTitleList[1].label}
                            boardId={majorIdTitleList[1].freeBoard}
                            majorOptions={majorIdTitleList}
                        />
                    ) : (
                        <MajorBoardSmall
                            title={majorIdTitleList[0].label}
                            boardId={majorIdTitleList[0].freeBoard}
                            majorOptions={majorIdTitleList}
                        />
                    )
                ) : (
                    <></>
                )}
            </HomeLayout>
        </>
    );
};

export default Home;
