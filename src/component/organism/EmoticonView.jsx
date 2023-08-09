import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { getSmungEmoticonUrl } from "api/Post/getSmungEmoticonUrl";

const EmoticonView = ({}) => {
    const [smungImgUrl, setSmungImgUrl] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(()=>{
        getSmungEmoticonUrl().then((response)=>{
            setSmungImgUrl(response);
        })  
    },[]);

    const handleEmoticonClick = (id) => {
        if (selectedId === id) {
            setSelectedId(null);
        } else {
            setSelectedId(id);
        }
    };

    return (
        <EmoticonContainer>
            <EmoticonLayout>
                {smungImgUrl.map((url, index)=>{
                    const isSelected = selectedId === index;
                    return (
                        <EmoticonImgView
                        key={index}
                        onClick={()=>(handleEmoticonClick(index))}
                        onTouchcancle={()=>{handleEmoticonClick(index)}}
                        isSelected={isSelected}
                        >
                        <EmoticonImg src={url}></EmoticonImg>
                        </EmoticonImgView>
                    )
                })}
            </EmoticonLayout>
        </EmoticonContainer>
    );
};

const EmoticonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 10%;
`;

const EmoticonLayout = styled.div`
    display: flex;
    width: 100%;
    gap: 15px;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    flex-wrap: wrap;
    overflow: auto;
`;

const EmoticonImgView = styled.div`
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
    background: ${({isSelected}) => (
        isSelected ? "#E8E8E8" : "white"
    )};
    border-radius: 10px;
    padding: 10px;
    gap: 10px;
`;

const EmoticonImg = styled.img`
    display: flex;
`;

export default EmoticonView;