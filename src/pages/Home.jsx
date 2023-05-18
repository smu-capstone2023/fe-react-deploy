import React, { useEffect, useState } from "react";
import HomeView from "../component/template/HomeView";
import { getHotBoardPreviewList } from '../api/board/getHotBoardPreviewList';
import { getLostBoardPreviewList } from '../api/board/getLostBoardPreviewList';
const Home = () => {
    const [userInfo, setUserInfo] = useState({ nickname: "", schoolId: "", major: "", mbti: "" });
    const [majorInfo, setMajorInfo] = useState({ majorName: "", majorId: -1 });
    const [hotPreviewList, setHotPreviewList] = useState([]);
    const [lostPreviewList, setLostPreviewList] = useState([]);
    useEffect(() => {
        if (localStorage.user_id) {
            const {user_name, user_id, majorList} = localStorage;
            setUserInfo({
                nickname: user_name,
                schoolId: user_id,
                major: "",
                mbti: "",
            });
            if (JSON.parse(majorList)[1]) {
                const major_name = JSON.parse(majorList)[1].major_name;
                const major_id = JSON.parse(majorList)[1].major_id;
                setUserInfo({
                    nickname: user_name,
                    schoolId: user_id,
                    major: major_name,
                    mbti: "",
                });
                setMajorInfo({
                    majorName: major_name,
                    majorId: major_id,
                });
            }
        };
        getHotBoardPreviewList().then((response) => {
            if (response) {
                setHotPreviewList(response);
            } else {
                console.log(response);
            }
        });
        getLostBoardPreviewList().then((response) => {
            if (response) {
                const sliceResponse = response.slice(0,2);
                setLostPreviewList(sliceResponse);
            } else {
                console.log(response);
            }
        });
    }, []);
    return (
        <HomeView userInfo={userInfo} hotPreviewList={hotPreviewList} majorInfo={majorInfo} lostPreviewList={lostPreviewList}></HomeView>
    );
};

export default Home;
