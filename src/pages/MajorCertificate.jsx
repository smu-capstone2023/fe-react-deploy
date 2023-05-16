import React from "react";
import MajorCertificateView from "../component/template/MajorCertificateView";

const MajorCertificate = () => {
    const onClickImageUploadButton = () => {alert('준비중입니다.(onClickImageUploadButton)')}
    const onChangeContent = () => {alert('준비중입니다.(onChangeContent)')}
    const onClickCompleteButton = () => {alert('준비중입니다.(onClickCompleteButton)')}
    //피그마 미구현
    const onClickDeleteImageButton = () => {alert('준비중입니다.(onClickDeleteImageButton)')}
    
    return(
            <MajorCertificateView 
                onClickImageUploadButton={onClickImageUploadButton}
                onClickDeleteImageButton={onClickDeleteImageButton}
                onChangeContent={onChangeContent}
                onClickCompleteButton={onClickCompleteButton}
            />
        );
};

export default MajorCertificate;
