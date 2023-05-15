import React from "react";
import styled from "styled-components";
import ImageView from "../molecule/ImageView";

/**
 * @param onChangeImageList : (value: string[]) => void;
 * @param imageList: string[]
 * @param iconSize: string;
 * @param size: string;
 * @returns
 */

export const ImageViewList = ({onChangeImageList, imageList, iconSize, size}) => {
    return (
        <>
            <ImageViewListLayout>
            {imageList && imageList.map((image, i)=>{
                return(
                    <ImageView iconSize={iconSize} size={size} onClickDelete={onChangeImageList} imageUrl={image}/>  
                )
            })} 
            </ImageViewListLayout>
        </>
    )
};

const ImageViewListLayout = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;
`;

export default ImageViewList;
