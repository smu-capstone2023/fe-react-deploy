import { NavbarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles';
import { FaBars } from 'react-icons/fa';
import React from 'react';
import axios from 'axios';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo onClick={() => (window.location.href = '/')}>상명대학교</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {localStorage.getItem('access_token') && (
                            <>
                                <NavItem>
                                    <NavLinks to='board/3'>학교게시판</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to={`board/2`}>학과게시판</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='feedback'>피드백게시판</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='mypage'>마이페이지</NavLinks>
                                </NavItem>
                            </>
                        )}
                        <NavItem>
                            {!localStorage.getItem('access_token') ? (
                                <NavLinks to='login'>로그인</NavLinks>
                            ) : (
                                <NavLinks
                                    onClick={() => {
                                        localStorage.clear();
                                        window.location.href = '/';
                                    }}
                                >
                                    로그아웃
                                </NavLinks>
                            )}
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
