import styled from "styled-components";
import Logo from "../atom/Logo";
import HambergerMenu from "./HambergerMenu";
import { useEffect, useState } from "react";

export const Header = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            setMenu([
                {
                    name: "학교게시판",
                    onClick: () => {
                        //localStorage의 majorList[0]의 majorId값과, free boardId 값을 이용해서
                        //상명대학교 자유게시판으로 이동할 수 있도록 로직 작성해주세요.
                    },
                },
                {
                    name: "학과게시판",
                    onClick: () => {
                        //localStorage의 majorList[1]의 majorId값과, free boardId 값을 이용해서
                        //해당 학과의 자유게시판으로 이동할 수 있도록 로직 작성해주세요.
                    },
                },
                {
                    name: "학사일정",
                    onClick: () => {
                        //학교의 학사일정 페이지로 들어갈 수 있도록 로직 작성해주세요.
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
            setMenu([{ name: "로그인", onClick: () => (window.location.href = "/login") }]);
        }
    }, []);

    return (
        <HeaderLayout>
            <EmptyBox />
            <LogoWrapper
                onClick={() => {
                    window.location.href = "/";
                }}
            >
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
