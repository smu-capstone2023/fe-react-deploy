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
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/preview?board_id=${process.env.REACT_APP_SCHOOL_BOARD_ID}&limit_post_num=5`,{
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            })
            .then((response) => {
                setBoardList(response.data);
            })
            .catch((response) => console.log(response));
    }, []);

    return (
        <>
            <SmallBoardLayout>

                <BoardBannerButton title='학교게시판' backgroundColor={'#FF8686'} boardId={process.env.REACT_APP_SCHOOL_BOARD_ID} />
                <DetailBoardTitleWithMore boardIcon={<TiArrowForward />} boardTitle='학사 공지' boardId={process.env.REACT_APP_SCHOOL_BOARD_ID} />

                
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
                Authorization : localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            setMajorList(response.data);
            console.log(response.data);
            
        })
        .catch((response) => console.log(response));

    };

    useEffect(() => {
        getUserMajorList();

    }, []);

    return (
        <>
            <HomeLayout>
                <SchoolBoard />
                {/* 학과게시판 주전공 하나만 보여주고 나머지 드롭 다운 토글 안으로.. 버전
                {majorList.length > 0 && <MajorBoardSmall 
                title={majorList[0].majorName} boardId={`${majorList[0].majorId}001`} />} */}


                   {/* 유저의 모든 전공 게시판 나열하는 버전 */}
                    {majorList.map((major) => {

                        //TODO: major.major_id => board_id

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
