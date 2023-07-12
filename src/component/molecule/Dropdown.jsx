import React from "react";
import styled from "styled-components";
import { useState } from "react";

export const Dropdown = ({width, content}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <DropdownLayout style={{width: width}}>
            {content.map((item, index)=>{
                const isHovered = index === hoveredIndex;
                return (
                    <DropdownMenu 
                        key={index} 
                        onClick={() => window.open(item.link, '_blank')}
                        onMouseOver={() => setHoveredIndex(index)}
                        onMouseOut={() => setHoveredIndex(null)}
                        isHovered={isHovered}
                    >
                        <button>{item.title}</button>
                    </DropdownMenu>
                );
            })}
        </DropdownLayout>
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
    color: ${(props) => (props.isHovered ? "#4169E1" : "black")};
    font-family: ${(props) => (props.isHovered ? "nexon-bold" : "nexon-light")};
`;

export default Dropdown;