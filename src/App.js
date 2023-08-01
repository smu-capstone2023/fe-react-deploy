import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import Login from "../src/pages/Login";
import Mypage from "./pages/MyPage";
import Signup from "./pages/Signup";
import AddPost from "./pages/AddPost";
import Board from "./pages/Board";
import ViewPost from "./pages/ViewPost";
import UserCertificate from "./pages/UserCertificate";
import Header from "./component/molecule/Header";
import MajorCertificate from "./pages/MajorCertificate";
import { getUserInfo } from "./api/User/getUserInfo";
import Footer from "./component/organism/Footer";

function App() {
    const setUserInfoInLocalStorage = (userName, schoolId, profileImageUrl, majorList) => {
        localStorage.setItem("user_name", userName);
        localStorage.setItem("school_id", schoolId);
        localStorage.setItem("profile_img_url", profileImageUrl);
        localStorage.setItem("majorList", JSON.stringify(majorList));
    };

    useEffect(() => {
        console.log("render");
        if (localStorage.getItem("access_token")) {
            getUserInfo().then((response) => {
                if (response === {}) {
                    alert("네트워크 문제! 잠시 다시 시도해주세요");
                } else {
                    const { username, school_id, profile_img_url, majors } = response;
                    setUserInfoInLocalStorage(username, school_id, profile_img_url, majors);
                }
            });
        }
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Helmet>
                <title>SMUS | 상명대 커뮤니티</title>
                {/* Primary Meta Tags */}
                <meta name="title" content="SMUS | 상명대학교 자체 커뮤니티" />
                <meta
                    name="description"
                    content="상명대학교 자체 커뮤니티는 학생들을 위한 온라인 공간입니다. 학교 생활에 관한 정보와 소식을 공유하며, 학우들 간의 교류와 소통을 도모합니다."
                />

                {/* Open Graph 메타태그 추가 */}
                <meta property="og:url" content="https://smus.co.kr/" />
                <meta property="og:image" content="https://smus.co.kr/Opengraphimage.png" />
                <meta property="og:title" content="SMUS | 상명대학교 자체 커뮤니티" />
                <meta
                    property="og:description"
                    content="상명대학교 자체 커뮤니티는 학생들을 위한 온라인 공간입니다. 학교 생활에 관한 정보와 소식을 공유하며, 학우들 간의 교류와 소통을 도모합니다."
                />
            </Helmet>
            <Header />
            <div style={{ paddingTop: "8vh", marginBottom: "30vh" }}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/mypage" element={<Mypage />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/addpost/:board_id/:post_id" element={<AddPost />}></Route>
                    <Route path="/board/:major_id/:board_id" element={<Board />}></Route>
                    <Route path="/viewpost/:board_id/:post_id" element={<ViewPost />}></Route>
                    <Route path="/user-certification" element={<UserCertificate />}></Route>
                    <Route path="/major-certification" element={<MajorCertificate />}></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
