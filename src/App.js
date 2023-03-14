import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Signup from './pages/Signup';
import AddPost from './pages/AddPost';
import Board from './pages/Board';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';
import SignupSection3 from './pages/Signup/SignupSection3';



function App() {
    //TODO: 지우기
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            //header을 따로 빼놓으심 
            <Sidebar toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen} isLogin={localStorage.getItem('email')} />
            <Navbar toggle={toggle} isOpen={isOpen} />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/mypage' element={<Mypage />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/signupsession3' element={<SignupSection3 />}></Route>
                <Route path='/addpost/:board_id' element={<AddPost />}></Route>
                <Route path='/board/:board_id' element={<Board />}></Route>
                <Route path='/viewpost/:post_id' element={<ViewPost />}></Route>
                <Route path='/editpost/:post_id' element={<EditPost />}></Route>
                //board,post id 값 주기
            </Routes>
        </div>
    );
}

export default App;
