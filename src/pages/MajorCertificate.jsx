import React, { useState } from "react";
import MajorCertificateView from "../component/template/MajorCertificateView";
import { postMajorCertificationPost } from "../api/manage/postMajorCertificationPost";

const MajorCertificate = () => {
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const onClickImageUploadButton = (imageUrl) => {
        setImageUrl(imageUrl);
    };

    const onClickCompleteButton = () => {
        if (imageUrl ===  '') {
            alert('사진을 추가해 주세요!');
        }
        else {
            postMajorCertificationPost(imageUrl, content)
                .then((response) =>{
                    if (response===true) {
                        alert('학과 인증 요청이 완료되었습니다.');
                        window.history.back();
                    }
                    else {alert('네트워크 오류입니다! 잠시 후 다시 시도해 주세요.')}
                })
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
