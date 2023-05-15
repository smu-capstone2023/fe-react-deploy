import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "../src/pages/Login";
import Mypage from "./pages/MyPage";
import Signup from "./pages/Signup";
import AddPost from "./pages/AddPost";
import Board from "./pages/Board";
//import ViewPost from "./pages/ViewPost";
//import EditPost from "./pages/EditPost";
import UserCertificate from "./pages/UserCertificate";
import Header from "./component/molecule/Header";
import MajorCertificate from "./pages/MajorCertificate";

function App() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/mypage" element={<Mypage />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/addpost/:board_id" element={<AddPost />}></Route>
                <Route path="/board/:major_id/:board_id" element={<Board />}></Route>
                {/* <Route path="/viewpost/:post_id" element={<ViewPost />}></Route> */}
                {/* <Route path="/editpost/:post_id" element={<EditPost />}></Route> */}
                <Route path="/user-certification" element={<UserCertificate />}></Route>
                <Route path="/major-certification" element={<MajorCertificate />}></Route>
            </Routes>
        </div>
    );
}

export default App;
