import React from "react";
import styled from 'styled-components';
import { AiFillMinusCircle } from "react-icons/ai";

/**
 * @param iconSize: string
 * @param size: string
 * @param onClickDelete: () => {}
 * @param imageUrl: string
 * @returns
 */

export const ImageView = ({iconSize, size, onClickDelete, imageUrl}) => {
    return (
        <ImageViewLayout size={size} imageUrl={imageUrl}>
            <DeleteImageButton iconSize={iconSize} onClick={onClickDelete}/>
        </ImageViewLayout>
    )
};

const ImageViewLayout = styled.div`
    display: flex;
    border-radius: 5px;
    width: ${(props)=>props.size};
    height: ${(props)=>props.size};
    background-image: url(${(props)=>props.imageUrl});
    background-size: cover;
    object-fit: cover;
    justify-content: end;
    align-items: flex-end;
`;

const DeleteImageButton = styled(AiFillMinusCircle)`
    display: flex;
    width: ${(props)=>props.iconSize};
    height: ${(props)=>props.iconSize};
    color: #FF5A5A;
`;

export default ImageView;