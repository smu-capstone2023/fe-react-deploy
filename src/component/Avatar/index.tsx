import React, { useState, useRef } from "react";
import { uploadImageToServer } from "../../api/utils/imageUploader";
import { ReactElement } from "react";
import { AvatarProps } from "./index.d";
import DefaultProfile from "../Avatar/DefaultProfile.svg";
import FileUpload from "../Avatar/fileUpload.svg";

export default function Avatar(props: AvatarProps): ReactElement {
    const { src = DefaultProfile, size, profileEdit, onNewProfileImageSelected } = props;
    const [profileUrl, setProfileUrl] = useState<string | null>(null);
    const fileInput = useRef<HTMLInputElement | null>(null);

    const handleGetImageUrl = (event :any) => {
        const file = event.target.files[0]; 
        const formData = new FormData();
        formData.append("image", file);
        uploadImageToServer(formData).then((response) => {
            if (response !== "") {
                setProfileUrl(response.imageUrls);
                onNewProfileImageSelected(response.imageUrls);
            }
        });
    };

    const handleClick = () => {
        if (fileInput.current !== null) {
            fileInput.current.click();
        }
    };

    return (
            <div
                style={{
                    display: "flex",
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: `${size / 2}px`,
                    backgroundImage: `url(${profileUrl ? profileUrl : src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    justifyContent: "end",
                    alignItems: "flex-end",
                }}
            >
                {profileEdit && 
                    <div
                        style={{
                            display: "flex",
                            width: "25px",
                            height: "25px",
                            background: "#4169E1",
                            borderRadius: `100px`,
                            backgroundImage: `url(${FileUpload})`,
                            backgroundSize: "cover",
                        }}

                        onClick={handleClick}
                    >
                            <input
                                type="file"
                                accept="image/jpg, image/jpeg, image/png"
                                style={{ display: "none" }}
                                ref={fileInput}
                                onChange={handleGetImageUrl}
                            />

                    </div>
                }
            </div>
    );
}
