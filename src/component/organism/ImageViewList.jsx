import React from "react";
import styled from "styled-components";
import ImageView from "../molecule/ImageView";

/**
 * @param onDeleteImage : (value: number) => void;
 * @param imageList: string[]
 * @param iconSize: string;
 * @param size: string;
 * @returns
 */

export const ImageViewList = ({ onDeleteImage, imageList, iconSize, size }) => {
    return (
        <>
            <ImageViewListLayout>
                {imageList &&
                    imageList.map((image, i) => {
                        return (
                            <ImageView
                                key={i}
                                iconSize={iconSize}
                                width={size}
                                height={size}
                                onClickDelete={() => onDeleteImage(i)}
                                imageUrl={image}
                            />
                        );
                    })}
            </ImageViewListLayout>
        </>
    );
};

const ImageViewListLayout = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

export default ImageViewList;
