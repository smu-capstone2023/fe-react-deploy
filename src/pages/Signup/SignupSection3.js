import React, { useState } from 'react';
import axios from 'axios';

import {CertificationLink, SignContainer, SignInputText, SignInnerBox, SignButton, DefaultText, SmallText} from './SignupStyles.js';




const SignupSection3 = ({ userSignupInfo }) => {
    const [nickName, setNickName] = useState('');
    // const [showModal, setShowModal] = useState(false);


    

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


    // //모달 띄우기
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   setShowModal(true);
    // };
  
    // const closeModal = () => {
    //   setShowModal(false);
    // };


    return (
        <SignContainer>
            <SignInnerBox>
                <DefaultText>사용하실 닉네임을 입력하세요</DefaultText>
                <SmallText>닉네임은 설정 후 30일 이후에 변경 가능합니다.</SmallText>
                <SignInputText onChange={(e) => setNickName(e.target.value)} placeholder='닉네임 입력'></SignInputText>
            </SignInnerBox>
            <SignButton
                onClick={() => {
                    if (checkAllOfSingUpInfo()) saveUserInfoAtServer();
                }}
            >
                회원가입 완료
            </SignButton>
            <DefaultText></DefaultText>
            <SmallText>학과인증을 통해 더 다양한 권한을 가질 수 있습니다.</SmallText>
            <CertificationLink to='../certification'>학과인증하기</CertificationLink>
        </SignContainer>
        
    );
};

export default SignupSection3;

//3.18 madal page 만들어서 './modal'로 연결하기