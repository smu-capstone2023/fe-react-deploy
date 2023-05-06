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
        </div>

    )
}
export const IconsButtonLayout = styled.div`
    display:flex;
    justify-content: space-between;
`;

export default HomeIconButtonList;