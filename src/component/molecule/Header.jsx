import styled from "styled-components";
import Logo from "../atom/Logo";
import HambergerMenu from "./HambergerMenu";
import { useEffect, useState } from "react";

export const Header = () => {
    const [menu, setMenu] = useState([]);

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
            setMenu([{ name: "로그인", onClick: () => (window.location.href = "/login") }]);
        }
    }, []);

    return (
        <HeaderLayout>
            <EmptyBox />
            <LogoWrapper onClick={() => (window.location.href = "/")}>
                <Logo width={"5"} />
            </LogoWrapper>
            {menu.map((item) => (
                <HeaderElement key={item.name} onClick={item.onClick}>
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
    display: flex;
    padding: 1rem;
    width: 100%;
    flex-direction: row;
    font-size: 1em;
    justify-content: flex-end;

    @media (max-width: 1300px) {
        font-size: 0.8em;
    }
    @media (max-width: 1000px) {
        justify-content: center;
        font-size: 0.7em;
    }
`;
const HeaderElement = styled.div`
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
