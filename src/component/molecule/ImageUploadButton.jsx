import React from "react";
import styled from "styled-components";
import { AiOutlineCamera } from "react-icons/ai";

/**
 * @param iconSize: string
 * @param size: string
 * @param onClick : () => {}
 * @returns
 */

export const ImageUploadButton = ({ iconSize, size, onClick }) => {
    return (
        <ImageUploadButtonLayout size={size} onClick={onClick}>
            <CameraIcon iconSize={iconSize} />
        </ImageUploadButtonLayout>
    );
};

const ImageUploadButtonLayout = styled.button`
    display: flex;
    border-radius: 5px;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    background: #e5e5e5;
    justify-content: center;
    align-items: center;
`;

const CameraIcon = styled(AiOutlineCamera)`
    display: flex;
    color: #656565;
    width: ${(props) => props.iconSize};
    height: ${(props) => props.iconSize};
`;

export default ImageUploadButton;
