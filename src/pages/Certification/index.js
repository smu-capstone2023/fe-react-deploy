//학과인증 페이지
import React, { useState } from 'react';
import {
    UploadInput,
    CertificationLayout,
    CertificationContainer,
    CertificationTitle,
    UploadButton,
    UploadButtonLabel,
    CertificationImageContainer,
    CertificationImageFrame,
    CertificationTextInput,
    SubmitButton,
    SubmitButtonLabel,
} from './CertificationStyles.ts';

import { postCertificationPost } from '../../api/manage/certificate.js';
import { uploadImageToServer } from '../../api/utils/imageUploader.js';
const Certification = () => {
    const [profileImgUrl, setProfileImgUrl] = useState(null);
    const [inputtext, setInputText] = useState('');

    const handleFileChange = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        uploadImageToServer(formData).then((response) => {
            setProfileImgUrl(response.imageUrl);
        });
    };

    return (
        <CertificationLayout>
            <CertificationContainer>
                <CertificationTitle>학과 인증</CertificationTitle>
                <CertificationImageContainer>
                    {profileImgUrl && <CertificationImageFrame src={profileImgUrl} />}
                </CertificationImageContainer>
                <UploadButton>
                    <UploadInput hidden type='file' accept='image/*' id='profileImg' onChange={(e) => handleFileChange(e)} />
                    <UploadButtonLabel htmlFor='profileImg'>사진 첨부하기</UploadButtonLabel>
                </UploadButton>
                <CertificationTextInput
                    type='text'
                    placeholder='기타사항을 입력해주세요.'
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                />
                <SubmitButton>
                    <SubmitButtonLabel
                        onClick={() => {
                            postCertificationPost(profileImgUrl, inputtext).then((response) => {
                                if (response) {
                                    alert('인증 요청을 완료했습니다.');
                                    window.location.href = '../mypage';
                                }
                            });
                        }}
                    >
                        확과 인증 업로드
                    </SubmitButtonLabel>
                </SubmitButton>
            </CertificationContainer>
        </CertificationLayout>
    );
};

export default Certification;
