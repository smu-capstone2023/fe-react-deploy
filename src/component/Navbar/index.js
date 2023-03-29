import { NavbarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles';
import { FaBars } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = ({ toggle}) => {
    const [MainMajor_free_boardId, setMainMajor_free_boardId] = useState('');
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}:8001/auth/usermajors`, {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            console.log('res',response.data);
            console.log('res2',response.data[1].free_board_id);
            setMainMajor_free_boardId(response.data[1].free_board_id);
        })
        .catch((response) => {
            console.log(response);
            alert('접근 불가능한 페이지입니다.');
        });
    }, []);

    return (
        <>
        
            <Nav>
                <NavbarContainer>
                    <NavLogo onClick={() => (window.location.href = '/')}>상명대학교</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='board/3'>학교게시판</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={`board/${MainMajor_free_boardId}`} >학과게시판</NavLinks>
                            
                        </NavItem>
                        <NavItem>
                            <NavLinks to='feedback'>피드백게시판</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='mypage'>마이페이지</NavLinks>
                        </NavItem>
                        <NavItem>
                            {!localStorage.getItem("access_token") ? (
                                <NavLinks to='login'>로그인</NavLinks>
                            ) : (
                                <NavLinks onClick={() => {
                                    localStorage.clear();
                                window.location.href="/"}
                            }>로그아웃</NavLinks>
                            )}
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;