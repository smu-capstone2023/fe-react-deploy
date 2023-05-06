import { useState } from 'react';
import IconButton from '../molecule/IconButton';
import { IoSchoolOutline,IoChatbubbleEllipsesOutline,IoCalendarOutline,IoCallOutline } from 'react-icons/io5'
import styled from 'styled-components';

export const HomeIconButtonList = () => {
    const iconSize = 1.3 
    const fontStyles = {
        fontFamily: 'nexon-regular',
        fontSize: '.5em',
      };

    return(

        <IconsButtonLayout>

                <IconButton 
                icon={<IoSchoolOutline/>} 
                title={'학교게시판'} 
                onClick={()=>alert('학교게시판')} 
                fontStyles={fontStyles} 
                iconSize={iconSize}></IconButton>

                <IconButton 
                icon={<IoChatbubbleEllipsesOutline/>} 
                title={'학과게시판'} 
                onClick={()=>alert('학과게시판')} 
                fontStyles={fontStyles} 
                iconSize={iconSize}></IconButton>

                <IconButton 
                icon={<IoCalendarOutline/>} 
                title={'학사일정'} 
                onClick={()=>alert('학사일정')} 
                fontStyles={fontStyles} 
                iconSize={iconSize}></IconButton>

                <IconButton 
                icon={<IoCallOutline/>} 
                title={'문의하기'} 
                onClick={()=>alert('문의하기')} 
                fontStyles={fontStyles} 
                iconSize={iconSize}></IconButton>

        </IconsButtonLayout>

    )
}
export const IconsButtonLayout = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
`;

export default HomeIconButtonList;