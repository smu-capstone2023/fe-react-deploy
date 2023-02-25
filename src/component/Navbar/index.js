import { NavbarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from "./NavbarStyles"
import {FaBars} from 'react-icons/fa';
import React from 'react';
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    상명대학교
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/">학교게시판</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="major">학과게시판</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="feedback">학과게시판</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="mypage">마이페이지</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="login">로그인</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;