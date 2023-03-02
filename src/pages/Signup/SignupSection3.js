import React, { useState } from 'react';
import axios from 'axios';
import { ProfileImage, Line, SignContainer, SignInputText, SignInnerBox, SignButton, DefaultText, SmallText } from './SignupStyles.js';

const SignupSection3 = ({ userSignupInfo }) => {
    const [nickName, setNickName] = useState('');

    const checkAllOfSingUpInfo = () => {
        if (nickName === '') {
            alert('닉네임을 입력해주세요');
            return false;
        } else {
            userSignupInfo.nickName = nickName;
            return true;
        }
    };

    const saveUserInfoAtServer = () => {
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}:8001/auth/join`, {
                email: userSignupInfo.email,
                nick: userSignupInfo.nickName,
                password: userSignupInfo.password,
                majornames: userSignupInfo.majorList.toString(),
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
                <SignInputText onChange={(e) => setNickName(e.target.value)} placeholder='닉네임 입력'></SignInputText>
                <Line></Line>
                <DefaultText>프로필 사진을 첨부해주세요.</DefaultText>
                <form>
                    <ProfileImage style={{ margin: '10px' }}></ProfileImage>
                    {/* 연결x */}
                    <label className='signup-profileImg-label' htmlFor='profileImg'>
                        사진 첨부하기
                    </label>
                    <input className='signup-profileImg-input' type='file' accept='image/*' id='profileImg' style={{ display: 'none' }} />
                </form>
            </SignInnerBox>
            <SignButton
                onClick={() => {
                    if (checkAllOfSingUpInfo()) saveUserInfoAtServer();
                }}
            >
                확인
            </SignButton>
        </SignContainer>
    );
};

export default SignupSection3;
