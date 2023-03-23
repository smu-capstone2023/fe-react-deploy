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
                <BoardBannerButton title='학교게시판' backgroundColor={'#FF8686'} boardId={'004003'} />
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
    const email = localStorage.getItem('email');

    
        if (email) {
            axios
                .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/usermajors`, {
                    headers: {
                        email: localStorage.getItem('email'),
                    },
                })
                .then((response) => {
                    setMajorList(response.data);
                })
                .catch((response) => console.log(response));
        }
    };

    useEffect(() => {
        getUserMajorList();
    }, [majorList.length]);

    return (
        <>
            <HomeLayout>
                <SchoolBoard />
                {/* 학과게시판 주전공 하나만 보여주고 나머지 드롭 다운 토글 안으로.. 버전 */}
                {majorList.length > 0 && <MajorBoardSmall 
                title={majorList[0].majorName} boardId={`${majorList[0].majorId}001`} />}


                   {/* 유저의 모든 전공 게시판 나열하는 버전
                    {majorList.map((major) => {
                    return (
                        <>
                            <MajorBoardSmall title={major.majorName} boardId={`${major.majorId}001`} />
                        </>
                    );
                })}   */}
                
                

                
            </HomeLayout>
        </>
    );
};

export default Home;
