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
import { getNotice } from '../../api/board/notice';

const SchoolBoard = () => {
    const [boardList, setBoardList] = useState([]);
    useEffect(() => {
        getNotice().then((response) => {
            setBoardList(response);
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
                            isNotice={true}
                            key={postElement.post_id}
                            title={postElement.title}
                            numberOfComment={null}
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
            <ShowMoreButton onClick={() => (window.location.href = `/board/${boardId}`)}>+ 더보기</ShowMoreButton>
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
    const [fade, setFade] = useState('');

    useEffect(() => {
        if (localStorage.getItem('access_token')) setUserMajorListInLocalStorage(localStorage.getItem('access_token'));
        setTimeout(() => {
            setFade('end');
        }, 100);
        return () => {
            setFade('');
        };
    }, []);

    const majorIdTitleList = JSON.parse(localStorage.getItem('major_options'));
    return (
        <>
            <HomeLayout className={`start ${fade}`}>
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
