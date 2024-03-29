import React, { useRef } from "react";
import { changeTimeTable } from "../../api/User/ChangeTimeTable";
import { uploadScheduleImageToServer } from "../../api/utils/scheduleImageUploader";
import { useToast } from "@chakra-ui/react";

/**
 * @param title : string
 * @returns
 */

export const ScheduleImgUpload = ({title} :any) => {
    const fileInput = useRef<HTMLInputElement | null>(null);
    const toast = useToast();

    const handleGetImageUrl = (event :any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        uploadScheduleImageToServer(formData).then((response) => {
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
                toast({ title: "이미지가 변경되었습니다", position: "top", isClosable: true, variant: "subtle" });
                window.location.reload();
            } else {
                toast({ title: "이미지 변경에 실패했습니다. 다시 시도해주세요.", position: "top", isClosable: true, variant: "subtle" });
                window.location.reload();
            }
        })

    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
        }}
        >
            <button style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "solid 1px #4169E1",
                borderRadius: "5px",
                background: "#ffffff",
                padding: "10px 30px",
                color: "#4169E1",
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
            </button>
        </div>
    );
}

export default ScheduleImgUpload;