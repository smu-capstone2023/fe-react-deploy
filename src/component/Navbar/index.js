import { NavbarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles';
import { FaBars } from 'react-icons/fa';
import React from 'react';
import axios from 'axios';

const Navbar = ({ toggle}) => {
    axios
    .get(`${process.env.REACT_APP_SERVER_URL}:8001/auth/usermajors`, {
        headers: {
            Authorization: localStorage.getItem('access_token'),
        },
    })
    .then((response) => {
      console.log(response);
        
        // response.data.postList.sort(
        //     (a, b) => new Date(b.createDate) - new Date(a.createDate));
        
        // setBoardList(response.data.post_id);
        // setBoardName(response.data.boardName);
        // setMajorName(response.data.majorName);
        
    })
    .catch((response) => {
        console.log(response);
        alert('접근 불가능한 페이지입니다.');
        // window.history.back();
        
    });

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
                            <NavLinks to={`board/2`} >학과게시판</NavLinks>
                            
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
