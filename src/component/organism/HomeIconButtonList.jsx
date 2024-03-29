import React from "react";
import IconButton from "../molecule/IconButton";
import { IoSchoolOutline, IoChatbubbleEllipsesOutline, IoCalendarOutline, IoCallOutline } from "react-icons/io5";
import styled from "styled-components";
import { useToast } from "@chakra-ui/react";
/**
 * @param width : string
 * @param fontSize: string
 * @param iconSize: number
 * @returns
 */

export const HomeIconButtonList = ({ fontSize, iconSize }) => {
    const toast = useToast();
    const fontStyles = {
        fontFamily: "nexon-regular",
        fontSize: fontSize,
    };

    const majorList = localStorage.getItem("majorList") ? JSON.parse(localStorage.getItem("majorList")) : null;

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton
                icon={<IoSchoolOutline />}
                title={"학교게시판"}
                onClick={() => {
                    const user_id = localStorage.getItem("user_id");
                    if (!user_id) {
                        toast({ title: "로그인이 필요한 기능입니다.", position: "top", isClosable: true, variant: "subtle" });
                    } else if (majorList && majorList.length >= 1) {
                        const major = majorList[0];
                        window.location.href = `/board/${major.major_id}/${major.free_board_id}`;
                    }
                }}
                fontStyles={fontStyles}
                iconSize={iconSize}
            ></IconButton>

            <IconButton
                icon={<IoChatbubbleEllipsesOutline />}
                title={"학과게시판"}
                onClick={() => {
                    const user_id = localStorage.getItem("user_id");
                    if (!user_id) {
                        toast({ title: "로그인이 필요한 기능입니다.", position: "top", isClosable: true, variant: "subtle" });
                    } else {
                        if (majorList && majorList.length >= 2) {
                            const major = majorList[1];
                            window.location.href = `/board/${major.major_id}/${major.free_board_id}`;
                        } else {
                            toast({ title: "학과 인증이 필요한 기능입니다.", position: "top", isClosable: true, variant: "subtle" });
                        }
                    }
                }}
                fontStyles={fontStyles}
                iconSize={iconSize}
            ></IconButton>

            <IconButton
                icon={<IoCalendarOutline />}
                title={"학사일정"}
                onClick={() => {
                    window.open("https://www.smu.ac.kr/ko/life/academicCalendar.do");
                }}
                fontStyles={fontStyles}
                iconSize={iconSize}
            ></IconButton>

            <IconButton
                icon={<IoCallOutline />}
                title={"문의하기"}
                onClick={() => {
                    toast({ title: "준비중입니다.", position: "top", isClosable: true, variant: "subtle" });
                }}
                fontStyles={fontStyles}
                iconSize={iconSize}
            ></IconButton>
        </div>
    );
};

export default HomeIconButtonList;
