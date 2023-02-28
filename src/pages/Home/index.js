import React from 'react';
import Notice from '../../component/PostListElement/Notice';
import { SchoolBoardButtonLayout, SchoolBoardButtonIcon, SchoolBoardTitle, SmallBoardLayout, HomeLayout, DetailBoardTitle, DetailBoardTitleWithMoreLayout, ShowMoreButton } from './HomeStyles';
import {TiArrowForward} from 'react-icons/ti'
const SchoolBoard = () => {
    return(
        <>
        <SmallBoardLayout>
            <BoardBannerButton title="학교게시판" backgroundColor={"#D9D9D9"} boardId={"23422"} />
            <DetailBoardTitleWithMore boardIcon={<TiArrowForward/>} boardTitle="학사 공지" boardId={"52342"}/>
            <Notice departmentName="학생복지팀" title="2023학년도 신입생 대학생활 안내 책자" numberOfComment={3} createDate="2023-02-17" postId={"1"}/>
            <Notice departmentName="학생복지팀" title="2023학년도 신입생 대학생활 안내 책자" numberOfComment={3} createDate="2023-02-17" postId={"2"}/>
            <Notice departmentName="학생복지팀" title="2023학년도 신입생 대학생활 안내 책자" numberOfComment={3} createDate="2023-02-17" postId={"3"}/>
            <Notice departmentName="학생복지팀" title="2023학년도 신입생 대학생활 안내 책자" numberOfComment={3} createDate="2023-02-17" postId={"4"}/>
        </SmallBoardLayout>
        </>
    )
}

const DetailBoardTitleWithMore = ({boardIcon, boardTitle, boardId}) => {
    return(
        <DetailBoardTitleWithMoreLayout>
            
            <DetailBoardTitle>
                 {boardIcon} {boardTitle}
            </DetailBoardTitle>
            <ShowMoreButton to={`/board/${boardId}`}>
                + 더보기
            </ShowMoreButton>
        </DetailBoardTitleWithMoreLayout>
    )
}

const BoardBannerButton = ({title, boardId, backgroundColor}) => {
    return(
        <>
        <SchoolBoardButtonLayout backgroundColor={backgroundColor} onClick={()=>{window.location.href=`${boardId}`}}>
            <SchoolBoardButtonIcon>
                <TiArrowForward size={'1.5em'}/>
            </SchoolBoardButtonIcon>
            <SchoolBoardTitle>
                {title}
            </SchoolBoardTitle>
        </SchoolBoardButtonLayout>
        </>
    )
}

const Home = () => {
    return(
        <>
            <HomeLayout>
                <SchoolBoard/>
                <SchoolBoard/>
            </HomeLayout>
        </>
    )
}

export default Home;