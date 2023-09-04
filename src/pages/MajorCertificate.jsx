import React, { useState } from "react";
import MajorCertificateView from "../component/template/MajorCertificateView";
import { postMajorCertificationPost } from "../api/manage/postMajorCertificationPost";
import { useToast } from "@chakra-ui/react";

const MajorCertificate = () => {
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const onClickImageUploadButton = (imageUrl) => {
        setImageUrl(imageUrl);
    };
    const toast = useToast();

    const onClickCompleteButton = () => {
        if (imageUrl === "") {
            toast({ title: "사진을 추가해 주세요!", position: "top", isClosable: true, variant: "subtle" });
        } else {
            postMajorCertificationPost(imageUrl, content).then((response) => {
                if (response === true) {
                    toast({ title: "학과 인증 요청이 완료되었습니다.", position: "top", isClosable: true, variant: "subtle" });
                    window.history.back();
                } else {
                    toast({ title: "네트워크 오류입니다! 잠시 후 다시 시도해 주세요.", position: "top", isClosable: true, variant: "subtle" });
                }
            });
        }
    };

    const onClickDeleteImageButton = () => {
        setImageUrl("");
    };

    return (
        <MajorCertificateView
            imageUrl={imageUrl}
            onClickImageUploadButton={onClickImageUploadButton}
            onClickDeleteImageButton={onClickDeleteImageButton}
            onChangeContent={setContent}
            onClickCompleteButton={onClickCompleteButton}
        />
    );
};

export default MajorCertificate;
