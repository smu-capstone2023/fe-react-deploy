import { NavbarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles';
import { FaBars } from 'react-icons/fa';
import React from 'react';
const Navbar = ({ toggle, isLogin }) => {
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
                            <NavLinks to='board/004003'>학교게시판</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='major'>학과게시판</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='feedback'>피드백게시판</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='mypage'>마이페이지</NavLinks>
                        </NavItem>
                        <NavItem>
                            {isLogin ? (
                                <NavLinks to='login'>로그인</NavLinks>
                            ) : (
                                <NavLinks onClick={() => localStorage.clear()}>로그아웃</NavLinks>
                            )}
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
