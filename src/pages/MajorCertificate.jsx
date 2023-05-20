import React, { useState } from "react";
import MajorCertificateView from "../component/template/MajorCertificateView";

const MajorCertificate = () => {
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const onClickImageUploadButton = (imageUrl) => {
        setImageUrl(imageUrl);
    };

    const onClickCompleteButton = () => {
        // 0. imageUrl이 ''이면 사진을 추가해달라는 alert를 띄워주세요! 아니면 아래와 같은 순서대로 진행됩니다.
        //  1. api/manage/postMajorCertificationPost.js 함수를 이용해서 content, imageUrl을 서버에 보냅니다.
        // 2. 만약 response가 false이면, alert로 네트워크 문제입니다! 잠시 후 시도해주세요를 작성해주세요.
        // 3. 만약 response가 true이면, 학과요청이 완료되었다는 alert를 띄워주시고, mypage로 가줍니다.
    };

    const onClickDeleteImageButton = () => {
        setImageUrl("");
    };

    return (
        <MajorCertificateView
            imageUrl={"https://pdfimages.wondershare.com/pdfelement/7-guide/batch-process.jp"}
            onClickImageUploadButton={onClickImageUploadButton}
            onClickDeleteImageButton={onClickDeleteImageButton}
            onChangeContent={setContent}
            onClickCompleteButton={onClickCompleteButton}
        />
    );
};

export default MajorCertificate;
