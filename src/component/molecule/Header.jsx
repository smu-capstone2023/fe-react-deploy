import styled from "styled-components";
import Logo from "../atom/Logo";
import HambergerMenu from "./HambergerMenu";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";

export const Header = () => {
    const [menu, setMenu] = useState([]);
    const [click, setClick] = useState(false);
    const dropdownTitle = "바로가기";
    const content = [
        { title: "상명대학교", link: "https://www.smu.ac.kr/ko/index.do" },
        { title: "샘물", link: "https://portal.smu.ac.kr/p/S00/" },
        { title: "학술정보관", link: "https://lib.smu.ac.kr/" },
        { title: "스마트출결", link: "http://att.smu.ac.kr" },
        { title: "e-campus", link: "https://ecampus.smu.ac.kr/" },
        { title: "피어오름", link: "https://peerorum.smu.ac.kr" },
        { title: "일자리플러스", link: "https://smcareer.smu.ac.kr/" },
        { title: "통합정보", link: "https://smul.smu.ac.kr/index.do" },
        { title: "입학처", link: "https://admission.smu.ac.kr/iphak_home.html" },
    ];
    const majorList = useSelector((state) => state.user.majors);

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            const majorList = JSON.parse(localStorage.getItem("majorList"));
            if (majorList && majorList.length >= 2) {
                setMenu([
                    {
                        name: "학교게시판",
                        onClick: () => {
                            window.location.href = `/board/${majorList[0].major_id}/${majorList[0].free_board_id}`;
                        },
                    },
                    {
                        name: "학과게시판",
                        onClick: () => {
                            window.location.href = `/board/${majorList[1].major_id}/${majorList[1].free_board_id}`;
                        },
                    },
                    {
                        name: "학사일정",
                        onClick: () => {
                            window.location.href = "https://www.smu.ac.kr/ko/life/academicCalendar.do";
                        },
                    },
                    {
                        name: "마이페이지",
                        onClick: () => {
                            window.location.href = "/mypage";
                        },
                    },
                    {
                        name: "로그아웃",
                        onClick: () => {
                            localStorage.clear();
                            window.location.href = "/";
                        },
                    },
                ]);
            } else {
                setMenu([
                    {
                        name: "학교게시판",
                        onClick: () => {
                            window.location.href = `/board/${majorList[0].major_id}/${majorList[0].free_board_id}`;
                        },
                    },
                    {
                        name: "학사일정",
                        onClick: () => {
                            window.location.href = "https://www.smu.ac.kr/ko/life/academicCalendar.do";
                        },
                    },
                    {
                        name: "마이페이지",
                        onClick: () => {
                            window.location.href = "/mypage";
                        },
                    },
                    {
                        name: "로그아웃",
                        onClick: () => {
                            localStorage.clear();
                            window.location.href = "/";
                        },
                    },
                ]);
            }
        } else {
            setMenu([
                { name: "로그인", onClick: () => (window.location.href = "/login") },
                { name: "회원가입", onClick: () => (window.location.href = "/signup") },
            ]);
        }
    }, []);

    return (
        <HeaderLayout>
            <EmptyBox />
            <LogoWrapper onClick={() => (window.location.href = "/")}>
                <Logo width={"5"} />
            </LogoWrapper>
            <Dropdown
                title={dropdownTitle}
                width={"150px"}
                content={content}
                showDropdown={click}
                onClick={() => {
                    setClick(!click);
                }}
            ></Dropdown>
            {menu.map((item) => (
                <HeaderElement
                    key={item.name}
                    onClick={() => {
                        item.onClick();
                    }}
                >
                    {item.name}
                </HeaderElement>
            ))}
            <HambergerLayout>
                <HambergerMenu menu={menu} />
            </HambergerLayout>
        </HeaderLayout>
    );
};

const EmptyBox = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: flex;
        flex: 1;
    }
`;
const LogoWrapper = styled.div`
    display: flex;
    margin-right: auto;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        flex: 1;
        margin-right: 0;
        justify-content: center;
    }
`;
const HeaderLayout = styled.div`
    padding: 0 1rem;
    z-index: 1;
    align-items: center;
    position: fixed;
    background: white;
    display: flex;
    height: 8vh;
    width: 100%;
    flex-direction: row;
    font-size: 1rem;

    @media (max-width: 1300px) {
        font-size: 1rem;
    }
    @media (max-width: 1000px) {
        justify-content: center;
        font-size: 1rem;
    }
`;
const HeaderElement = styled.div`
    position: relative;
    padding: 0.1rem;
    padding-left: 0.6rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }
`;
const HambergerLayout = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
    }
`;
export default Header;
