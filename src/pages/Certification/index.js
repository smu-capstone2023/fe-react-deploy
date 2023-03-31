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
import axios from 'axios';

const uploadImageToServer = (formData) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}:8001/upload`, formData, {
            headers: {
                'Contest-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => console.log(response));
};

const Certification = () => {
    const [profileImgUrl, setProfileImgUrl] = useState(null);
    const handleFileChange = (e) => {
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
                    <UploadButtonLabel className='signup-profileImg-label' htmlFor='profileImg'>
                        사진 첨부하기
                    </UploadButtonLabel>
                    <UploadInput type='file' accept='image/*' id='profileImg' onChange={handleFileChange} />
                </UploadButton>
                <CertificationTextInput type='text' placeholder='기타사항을 입력해주세요.' />
                <SubmitButton>
                    <SubmitButtonLabel>확과 인증 업로드</SubmitButtonLabel>
                </SubmitButton>
            </CertificationContainer>
        </CertificationLayout>
    );
};

export default Certification;
