import React from "react";
import HomeView from "../component/template/HomeView";
import BoardSelectBox from "../component/molecule/BoardSelectBox";
const Home = () => {
    return (
        <>
        <BoardSelectBox></BoardSelectBox>
        <HomeView
            userInfo={{ nickname: "키야", schoolId: "1234r5", major: "컴퓨터과학과", mbti: "INTJ" }}
            hotPreviewList={[
                { title: "hot게시판 데이터1", id: "123412", commentCount: 10, likeCount: 19 },
                { title: "hot게시판 데이터1", id: "123412", commentCount: 10, likeCount: 19 },
                { title: "hot게시판 데이터1", id: "123412", commentCount: 10, likeCount: 19 },
                { title: "hot게시판 데이터1", id: "123412", commentCount: 10, likeCount: 19 },
                { title: "hot게시판 데이터1", id: "123412", commentCount: 10, likeCount: 19 },
            ]}
            majorInfo={{ majorName: "컴퓨터과학과", majorId: 12 }}
            lostPreviewList={[{ content: "분실물 데이터입니다." }, { content: "분실물 데이터입니다." }]}
        ></HomeView>
         </>
    );
};

export default Home;
