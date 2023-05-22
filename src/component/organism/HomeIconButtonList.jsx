import React from 'react';
import IconButton from '../molecule/IconButton';
import { IoSchoolOutline,IoChatbubbleEllipsesOutline,IoCalendarOutline,IoCallOutline } from 'react-icons/io5'
import styled from 'styled-components';

/**
 * @param width : string
 * @param fontSize: string
 * @param iconSize: number 
 * @returns
 */

export const HomeIconButtonList = ({width, fontSize, iconSize}) => {
    const fontStyles = {
        fontFamily: 'nexon-regular',
        fontSize: fontSize,
      };

    return(

        <div style={{display:'flex', justifyContent:'space-between', width:width}}>

                <IconButton
                icon={<IoSchoolOutline />}
                title={"학교게시판"}
                onClick={() => {
                    /*
                     * 1. localStorage에 있는 user_id값이 없으면 alert로 로그인이 필요한 기능입니다라고 alert를 띄워주세요.
                     * 2. 만약 user_id값이 있으면, majorList[0]을 이용해서, 상명대학교 자유게시판으로 이동할 수 있도록 구현해주세요.
                     */
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
                    /**
                     * 1. localStorage에 있는 user_id값이 없으면 alert로 로그인이 필요한 기능입니다라고 alert를 띄워주세요.
                     * 2. 만약 user_id값이 있는데, majorList[1]의 값이 없으면, 학과인증이 필요한 기능입니다.라고 alert를 띄워주세요.
                     * 2. 만약 majorList[1]의 값이 있으면, majorList[1]을 이용해서, 전공의 자유게시판으로 이동할 수 있도록 구현해주세요.
                     */
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
                icon={<IoCallOutline/>} 
                title={'문의하기'} 
                onClick={() => {
                    /**
                     * 준비중이라고 alert를 띄워주세요.
                     */
                    alert("준비중입니다.");
                }}
                fontStyles={fontStyles} 
                iconSize={iconSize}></IconButton>
        </div>

    )
}
export const IconsButtonLayout = styled.div`
    display:flex;
    justify-content: space-between;
`;

export default HomeIconButtonList;