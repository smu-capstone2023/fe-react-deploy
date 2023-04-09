import React, { useState } from 'react';
import axios from 'axios';

import {
    SignContainer3,
    SignInputText,
    SignInnerBox as SignInnerBox3,
    SignButton as SignButton3,
    DefaultText,
    SmallText,
    ProfileImageContainer,
    ProfileImageFrame,
} from './SignupStyles.js';
import { uploadImageToServer } from '../../api/utils/imageUploader.js';

const SignupSection3 = ({ userSignupInfo }) => {
    const [nickname, setNickname] = useState('');
    const [profileImgUrl, setProfileImgUrl] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!profileImgUrl) {
            alert('프로필 사진을 선택해주세요');
            return;
        }
    };

    const checkAllOfSingUpInfo = () => {
        if (nickname === '') {
            alert('닉네임을 입력해주세요');
            return false;
        } else {
            userSignupInfo.nickname = nickname;
            return true;
        }
    };

    const handleFileChange = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        uploadImageToServer(formData).then((response) => {
            setProfileImgUrl(response.imageUrl);
        });
    };

    //TODO: 회원가입할 때 프로필 이미지 url 넘겨주기
    const saveUserInfoAtServer = () => {
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/auth/join`, {
                school_id: userSignupInfo.school_id,
                nickname: userSignupInfo.nickname,
                password: userSignupInfo.password,
            })
            .then((response) => {
                console.log(response);
                window.location.href = '/login';
            })
            .catch((response) => console.log(response));
    };

    return (
        <SignContainer3>
            <SignInnerBox3>
                <DefaultText>사용하실 닉네임을 입력하세요</DefaultText>
                <SmallText>닉네임은 설정 후 30일 이후에 변경 가능합니다.</SmallText>
                <SignInputText onChange={(e) => setNickname(e.target.value)} placeholder='닉네임 입력'></SignInputText>
                <DefaultText>프로필 사진을 첨부해주세요.</DefaultText>
                <ProfileImageContainer>{profileImgUrl && <ProfileImageFrame src={profileImgUrl} />}</ProfileImageContainer>
                <form onSubmit={handleSubmit} style={{ flex: 1 }}>
                    <label className='signup-profileImg-label' htmlFor='profileImg'>
                        사진 첨부하기
                    </label>
                    <input
                        className='signup-profileImg-input'
                        type='file'
                        accept='image/*'
                        id='profileImg'
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </form>
            </SignInnerBox3>
            <SignButton3
                onClick={() => {
                    if (checkAllOfSingUpInfo()) saveUserInfoAtServer();
                }}
            >
                회원가입 완료
            </SignButton3>
            <SmallText>학과인증을 통해 더 다양한 권한을 가질 수 있습니다.</SmallText>
        </SignContainer3>
    );
};

export default SignupSection3;
