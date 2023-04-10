import { NavbarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles';
import { FaBars } from 'react-icons/fa';
import React from 'react';

const Navbar = ({ toggle }) => {
    const majorList = JSON.parse(localStorage.getItem('major_options'));
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
                                    <NavLinks
                                        onClick={() => {
                                            window.location.href = `/board/1/3`;
                                        }}
                                    >
                                        학교게시판
                                    </NavLinks>
                                </NavItem>
                                {majorList && majorList[1] && (
                                    <NavItem>
                                        <NavLinks
                                            onClick={() => {
                                                window.location.href = `/board/${majorList[1].value}/${majorList[1].freeBoard}`;
                                            }}
                                        >
                                            학과게시판
                                        </NavLinks>
                                    </NavItem>
                                )}

                                <NavItem>
                                    <NavLinks
                                        onClick={() => {
                                            window.location.href = '/board/1/17';
                                        }}
                                    >
                                        피드백게시판
                                    </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks onClick={() => (window.location.href = '/mypage')}>마이페이지</NavLinks>
                                </NavItem>
                            </>
                        )}
                        <NavItem>
                            {!localStorage.getItem('access_token') ? (
                                <NavLinks onClick={() => (window.location.href = '/login')}>로그인</NavLinks>
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
