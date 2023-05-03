import { useState } from 'react';
import IconButton from '../molecule/IconButton';
import { IoSchoolOutline,IoChatbubbleEllipsesOutline,IoCalendarOutline,IoCallOutline } from 'react-icons/io5'
import styled from 'styled-components';

export const HomeIconButtonList = ({iconProps, fontProps}) => {
    const [title] = useState(['학교게시판','학과게시판','학사일정','문의하기']);
    const [icon] = useState([<IoSchoolOutline/>,<IoChatbubbleEllipsesOutline/>,<IoCalendarOutline/>,<IoCallOutline/>]); 
    const onClick = (title) => {alert(title)}
    const iconSize = iconProps; 
    const fontStyles = {
        fontFamily: 'nexon-regular',
        fontSize: fontProps,
      };

    return(

        <IconsButtonLayout>
            {icon.map((icon, index) => (
                <IconButton 
                key={index} 
                icon={icon} 
                title={title[index]} 
                onClick={()=>onClick(title[index])} 
                fontStyles={fontStyles} 
                iconSize={iconSize} />
            ))}
        </IconsButtonLayout>

    )
}
export const IconsButtonLayout = styled.div`
    display:flex;
`;

export default HomeIconButtonList;