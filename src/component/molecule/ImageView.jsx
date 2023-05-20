import React from "react";
import styled from "styled-components";
import { AiFillMinusCircle } from "react-icons/ai";

/**
 * @param iconSize: string
 * @param size: string
 * @param onClickDelete: () => {}
 * @param imageUrl: string
 * @returns
 */

export const ImageView = ({ iconSize, width, height, onClickDelete, imageUrl }) => {
    return (
        <ImageViewLayout width={width} height={height} imageUrl={imageUrl}>
            <DeleteImageButton iconSize={iconSize} onClick={onClickDelete} />
        </ImageViewLayout>
    );
};

const ImageViewLayout = styled.div`
    display: flex;
    border-radius: 5px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    object-fit: cover;
    justify-content: end;
    align-items: flex-end;
`;

const DeleteImageButton = styled(AiFillMinusCircle)`
    display: flex;
    width: ${(props) => props.iconSize};
    height: ${(props) => props.iconSize};
    color: #ff5a5a;
`;

export default ImageView;
