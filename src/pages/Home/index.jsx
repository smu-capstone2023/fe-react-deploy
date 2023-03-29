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
            .catch((response) => console.log(response));
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
                    console.log(postElement);
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
    const [majorOptions, setMajorOptions] = useState([]);
    const getUserMajorList = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/auth/usermajors`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                const tempMajorList = [];
                response.data.forEach((element) => {
                    tempMajorList.push({ value: element.free_board_id, label: element.major_name });
                });
                localStorage.setItem('major_options', JSON.stringify(tempMajorList));
                setMajorOptions(tempMajorList);
            })
            .catch((response) => {
                localStorage.clear();
            });
    };

    useEffect(() => {
        if (localStorage.getItem('access_token')) getUserMajorList();
    }, [majorOptions.length]);

    return (
        <>
            <HomeLayout>
                <SchoolBoard />
                {majorOptions.length !== 0 && (
                    <MajorBoardSmall title={majorOptions[0].label} boardId={majorOptions[0].value} majorOptions={majorOptions} />
                )}
            </HomeLayout>
        </>
    );
};

export default Home;
