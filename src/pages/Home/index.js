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
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/school/noti/list`)
            .then((response) => {
                setBoardList(response.data);
            })
            .catch((response) => console.log(response));
    }, []);

    return (
        <>
            <SmallBoardLayout>
                <BoardBannerButton title='학교게시판' backgroundColor={'#D9D9D9'} boardId={'004003'} />
                <DetailBoardTitleWithMore boardIcon={<TiArrowForward />} boardTitle='학사 공지' boardId={'004003'} />
                {boardList.map((postElement) => {
                    return (
                        <Notice
                            key={postElement.postId}
                            departmentName={postElement.nickName}
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
    const [majorList, setMajorList] = useState([]);
    const getUserMajorList = () => {
    

        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/auth/usermajors`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                setMajorList(response.data);

            })
            .catch((response) => console.log(response));
        
    };

    useEffect(() => {
        getUserMajorList();
    }, [majorList.length]);

    return (
        <>
            <HomeLayout>
                <SchoolBoard />
                {majorList.map((major) => {
                    return (
                        <>
                            <MajorBoardSmall title={major.major_name} boardId={major.major_id} />
                        </>
                    );
                })}
            </HomeLayout>
        </>
    );
};

export default Home;
