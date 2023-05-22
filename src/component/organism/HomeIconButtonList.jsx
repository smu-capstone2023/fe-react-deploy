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
    const majorList = JSON.parse(localStorage.getItem("majorList"));
    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: width }}>
            <IconButton
                icon={<IoSchoolOutline />}
                title={"학교게시판"}
                onClick={() => {
                    const user_id = localStorage.getItem("user_id");
                    if (!user_id) {
                        alert("로그인이 필요한 기능입니다.");
                    } else if (majorList.length >= 1) {
                        const majorId = majorList[0];
                        window.location.href = `/board/${majorId}`;
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
                        if (majorList.length >= 2) {
                            const majorId = majorList[1];
                            if (!majorId) {
                                alert("학과인증이 필요한 기능입니다.");
                            } else {
                                window.location.href = `/board/${majorId}`;
                            }
                        } else {
                            alert("학과게시판이 없습니다.");
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
                    /**
                     * 상명대학교 공식 홈페이지의 학사일정으로 이동할 수 있게 구현해주세요.
                     */
                    window.location.href = "https://www.smu.ac.kr/ko/life/academicCalendar.do";
                }}
                fontStyles={fontStyles}
                iconSize={iconSize}
            ></IconButton>

            <IconButton
                icon={<IoCallOutline />}
                title={"문의하기"}
                onClick={() => {
                    /**
                     * 준비중이라고 alert를 띄워주세요.
                     */
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
