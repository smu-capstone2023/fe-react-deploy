import React, { useState } from 'react';
import axios from 'axios';

import {
    ProfileImage,
    Line,
    CertificationLink,
    SignContainer,
    SignInputText,
    SignInnerBox,
    SignButton,
    DefaultText,
    SmallText,
} from './SignupStyles.js';

const SignupSection3 = ({ userSignupInfo }) => {
    const [nickname, setNickname] = useState('');
    const [profileImgUrl, setProfileImgUrl] = useState('');
    // const [showModal, setShowModal] = useState(false);

    const handleProfileImgChange = (e) => {
        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setProfileImgUrl(imgUrl);
    };

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
        setProfileImgUrl(e.target.files[0]);
    };

    // headers: {
    //     school_id: school_id,
    //     password: password,
    //     'Content-type': 'application/json',
    //     Accept: 'application/json',
    // },

    const saveUserInfoAtServer = () => {
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}:8001/auth/join`, {
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
        <SignContainer>
            <SignInnerBox>
                <DefaultText>사용하실 닉네임을 입력하세요</DefaultText>
                <SmallText>닉네임은 설정 후 30일 이후에 변경 가능합니다.</SmallText>
                <SignInputText onChange={(e) => setNickname(e.target.value)} placeholder='닉네임 입력'></SignInputText>
                <Line></Line>
                <DefaultText>프로필 사진을 첨부해주세요.</DefaultText>
                {profileImgUrl ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', height: '80%' }}>
                        <img src={URL.createObjectURL(profileImgUrl)} alt='프로필 이미지' style={{ maxWidth: '80%', maxHeight: '80%' }} />
                    </div>
                ) : (
                    <ProfileImage style={{ margin: '30px' }} />
                )}
                <form onSubmit={handleSubmit}>
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
            </SignInnerBox>
            <SignButton
                onClick={() => {
                    if (checkAllOfSingUpInfo()) saveUserInfoAtServer();
                }}
            >
                회원가입 완료
            </SignButton>
            <SmallText>학과인증을 통해 더 다양한 권한을 가질 수 있습니다.</SmallText>
            <CertificationLink to='../certification'>학과인증하기</CertificationLink>
        </SignContainer>
    );
};

export default SignupSection3;
