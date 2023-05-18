import React, { useEffect, useState } from "react";
import HomeView from "../component/template/HomeView";
const Home = () => {
    const [userInfo, setUserInfo] = useState({ nickname: "", schoolId: "", major: "", mbti: "" });
    const [majorInfo, setMajorInfo] = useState({ majorName: "", majorId: -1 });
    const [hotPreviewList, setHotPreviewList] = useState([]);
    const [lostPreviewList, setLostPreviewList] = useState([]);
    useEffect(() => {
        //1. localStorage에 있는 값을 이용하여 setUserInfo에 해당 필드들의 값들을 채워주세요
        // 아직 mbti는 구현이 되어 있지 않기 때문에, 따로 값을 주지 않으셔도 됩니다.
        //2. localStorage에 있는 majorList값을 이용해서 setMajorInfo에 해당 필드들의 값들을 채워주세요.
        // 단, majorList[0]에는 상명대학교가 들어가 있으니, majorList[1]의 값을 넣어주세요.
        //3. api/board/getHotBoardPreivewList.js를 이용해서 setHotPreviewList로 해당 필드를 채워주세요.
        // 이때, hotPreviewList의 값들은 {title, post_id, comments, likes}[]의 형식입니다.
        //4.api/board/getLostBoardPrivewList.js를 이용해서 setLostPreviewList로 해당 필드를 채워주세요
        // 이때, 분실문 데이터는 2개의 포스트만 보여주기 때문에 백엔드에서 받은 응답값에서 2개만 setLostPreviewList를 할 수 있도록 로직을 작성해주세요.
    }, []);
    return (
        <HomeView userInfo={userInfo} hotPreviewList={hotPreviewList} majorInfo={majorInfo} lostPreviewList={lostPreviewList}></HomeView>
    );
};

export default Home;
