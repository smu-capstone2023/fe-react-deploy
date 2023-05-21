import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineCamera } from "react-icons/ai";

/**
 * @param iconSize: string
 * @param size: string
 * @param onClickImageButton : () => {}
 * @returns
 */

export const ImageUploadButton = ({ iconSize, size, onClickImageButton }) => {

    const fileInput = useRef();

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        //src/utils/imageUploader.js를 이용해서 업로드 후에 받은 url response값을 아래 주석처럼 onClickImageButton에 인자값으로 넣어주세요.
        //onClickImageButton(imageUrl); <- callback
        if (file) {
        uploadImageToServer(file, (imageUrl) => {
        onClickImageButton(imageUrl);
        });
        };
    };

    const handleClick = () => {
        fileInput.current.click();
    };

    return (
        <ImageUploadButtonLayout size={size} onClick={handleClick}>
            <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                style={{ display: "none" }}
                ref={fileInput}
                onChange={handleFileUpload}
            />
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
