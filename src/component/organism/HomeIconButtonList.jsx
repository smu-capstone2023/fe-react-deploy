import React from "react";
import IconButton from "../molecule/IconButton";
import { IoSchoolOutline, IoChatbubbleEllipsesOutline, IoCalendarOutline, IoCallOutline } from "react-icons/io5";
import styled from "styled-components";

/**
 * @param width : string
 * @param fontSize: string
 * @param iconSize: number
 * @returns
 */

export const HomeIconButtonList = ({ width, fontSize, iconSize }) => {
    const fontStyles = {
        fontFamily: "nexon-regular",
        fontSize: fontSize,
    };

    const majorList = localStorage.getItem("majorList") ? JSON.parse(localStorage.getItem("majorList")) : null;

    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: width }}>
            <IconButton
                icon={<IoSchoolOutline />}
                title={"학교게시판"}
                onClick={() => {
                    const user_id = localStorage.getItem("user_id");
                    if (!user_id) {
                        alert("로그인이 필요한 기능입니다.");
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
                        alert("로그인이 필요한 기능입니다.");
                    } else {
                        if (majorList && majorList.length >= 2) {
                            const major = majorList[1];
                            window.location.href = `/board/${major.major_id}/${major.free_board_id}`;
                        } else {
                            alert("학과 인증이 필요한 기능입니다.");
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
                    window.location.href = "https://www.smu.ac.kr/ko/life/academicCalendar.do";
                }}
                fontStyles={fontStyles}
                iconSize={iconSize}
            ></IconButton>

            <IconButton
                icon={<IoCallOutline />}
                title={"문의하기"}
                onClick={() => {
                    alert("준비중입니다.");
                }}
                fontStyles={fontStyles}
                iconSize={iconSize}
            ></IconButton>
        </div>
    );
};
export const IconsButtonLayout = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default HomeIconButtonList;
