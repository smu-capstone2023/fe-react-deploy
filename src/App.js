import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
            <Header />
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
    );
}

export default App;
