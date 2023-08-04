import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { getSmungEmoticonUrl } from "api/Post/getSmungEmoticonUrl";

const EmoticonView = ({}) => {
    const [smungImgUrl, setSmungImgUrl] = useState([]);
    const [mouseOverIndex, setMouseOverIndex] = useState(false);

    useEffect(()=>{
        getSmungEmoticonUrl().then((response)=>{
            setSmungImgUrl(response);
        })  
    },[])

    return (
        <EmoticonContainer>
            <EmoticonLayout>
                {smungImgUrl.map((url, index)=>{
                    const isHovered = index === mouseOverIndex;
                    return (
                        <EmoticonImgView
                        key={index}
                        onMouseOver={()=>{setMouseOverIndex(index)}} 
                        onMouseOut={()=>{setMouseOverIndex(null)}}
                        isHovered={isHovered}
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
    background: ${({isHovered}) => (isHovered ? "#E8E8E8" : "white")};
    border-radius: 10px;
    padding: 10px;
    gap: 10px;
`;

const EmoticonImg = styled.img`
    display: flex;
`;

export default EmoticonView;