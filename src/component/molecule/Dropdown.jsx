import React from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"; 

export const Dropdown = ({title, width, content, showDropdown, onClick}) => {
    return (
        <DropdownBox onClick={onClick}>
            {title}
            <MdOutlineKeyboardArrowDown style={{display: "inline", textAlign: "center", verticalAlign: "middle"}}></MdOutlineKeyboardArrowDown>
            {showDropdown && (
                <DropdownLayout style={{width: width}}>
                    {content.map((item, index)=>{
                        return (
                            <DropdownMenu 
                                key={index} 
                                onClick={() => window.open(item.link, '_blank')}
                            >
                                <button>{item.title}</button>
                            </DropdownMenu>
                        );
                    })}
                </DropdownLayout>
            )}
        </DropdownBox>
    );
};

const DropdownLayout = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30px;
    background: #ffffff; 
    border: 1px solid #e5e5e5;
    border-radius: 0.3rem;
    width: ${(props)=>props.width};
    heigth: 100%;
    box-shadow: 2px 2px 5px 2px #EDEDED;
`;

const DropdownMenu = styled.div`
    display: flex;
    padding: 0.5em 0.8em;
    width: 100%;
    &:hover{  
        font-family : nexon-bold;
        color : #4169E1;
    }
`;

const DropdownBox = styled.div`
    position: relative;
    padding: 0.1rem;
    padding-left: 0.6rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }
`;

export default Dropdown;