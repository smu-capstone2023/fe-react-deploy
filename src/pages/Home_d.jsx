import React, { useEffect, useState } from "react";
import HomeView from "../component/template/HomeView";
import { getHotBoardPreviewList } from "../api/board/getHotBoardPreviewList";
import { getLostBoardPreviewList } from "../api/board/getLostBoardPreviewList";
import { getBoardPostPreview } from "../api/BoardApi/getBoardPostPreview";
import { useSelector } from "react-redux";
const Home = () => {
    const [userInfo, setUserInfo] = useState({ nickname: "", schoolId: "", major: "", mbti: "" });
    const [majorInfo, setMajorInfo] = useState({ majorName: "", majorId: -1, freeBoardId: -1 });
    const [hotPreviewList, setHotPreviewList] = useState([]);
    const [lostPreviewList, setLostPreviewList] = useState([]);
    const [majorPreviewList, setMajorPreviewList] = useState([]);
    const userInfoData = useSelector((state)=>state.user);
    //TODO: localStorage에서는 로그인 유무만 판단하고, 자세한 정보를 가져오는 로직은 다시 작성해야 함
    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            const user_name = userInfoData.username;
            const school_id = userInfoData.school_id;
            const majorList = userInfoData.majors;

            if (majorList && majorList.length >= 2) {
                const { major_name, major_id, free_board_id } = majorList[1];
                setUserInfo({
                    nickname: user_name,
                    schoolId: school_id,
                    major: major_name,
                    mbti: "",
                });
                setMajorInfo({
                    majorName: major_name,
                    majorId: major_id,
                    freeBoardId: free_board_id,
                });
                getBoardPostPreview(free_board_id, 6).then((response) => {
                    setMajorPreviewList(response);
                });
            } else {
                setUserInfo({
                    nickname: user_name,
                    schoolId: school_id,
                    major: "",
                    mbti: "",
                });
            }
        }
        getHotBoardPreviewList().then((response) => {
            if (response) {
                setHotPreviewList(response);
            }
        });

        getLostBoardPreviewList().then((response) => {
            if (response) {
                const sliceResponse = response.slice(0, 2);
                setLostPreviewList(sliceResponse);
            }
        });
    }, [userInfoData]);
    return (
        <HomeView
            majorPreviewList={majorPreviewList}
            userInfo={userInfo}
            hotPreviewList={hotPreviewList}
            majorInfo={majorInfo}
            lostPreviewList={lostPreviewList}
        ></HomeView>
    );
};

export default Home;

