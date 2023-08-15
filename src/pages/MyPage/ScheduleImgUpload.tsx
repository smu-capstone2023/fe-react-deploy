import React, { useRef } from "react";
import { uploadImageToServer } from "../../api/utils/imageUploader";
import { changeTimeTable } from "../../api/User/ChangeTimeTable";

/**
 * @param title : string
 * @returns
 */

export const ScheduleImgUpload = ({title} :any) => {
    const fileInput = useRef<HTMLInputElement | null>(null);

    const handleGetImageUrl = (event :any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        uploadImageToServer(formData).then((response) => {
            if (response !== "") {
                scheduleImageUpload(response.imageUrls);
            }
        });
    };

    const handleClick = () => {
        if (fileInput.current !== null) {
            fileInput.current.click();
        }
    };

    const scheduleImageUpload = (imageUrl :string) => {
        changeTimeTable(imageUrl).then((response)=>{
            if (response) {
                alert("이미지가 변경되었습니다");
                window.location.reload();
            } else {
                alert("이미지가 변경에 실패했습니다. 다시 시도해주세요.");
                window.location.reload();
            }
        })

    };

    return (
        <p style={{
            fontFamily: "nexon-regular",
            fontSize: "13px",
            color: "#4169E1",
            margin: "3px 0 5px 15px",
            verticalAlign: "middle",
            flex: "1",
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
        {title}
        </p>
    );
}

export default ScheduleImgUpload;