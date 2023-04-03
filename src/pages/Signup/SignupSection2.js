import React, { useState } from 'react';
import { SignContainer, SignInputText, SignInnerBox, SignButton, DefaultText, SmallText } from './SignupStyles.js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { COLORS } from '../../color';
import './SignupStyles.css';

const SignupSection2 = ({ setCurrentSection, setUserSignupInfo }) => {
    const [school_id, setSchoolId] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const checkSchoolIdRegExp = (school_id) => {
        const emailRegex = new RegExp('^[0-9]{9}$');
        return emailRegex.test(school_id);
    };

    const checkPasswordRegExp = (password) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
        return passwordRegex.test(password);
    };

    const checkAllOfSingUpInfo = () => {
        if (!checkSchoolIdRegExp(school_id)) {
            alert('학번 형식을 확인해주세요.');
            return false;
        } else if (!checkPasswordRegExp(password)) {
            alert('비밀번호 형식을 확인해주세요.');
            return false;
        } else if (checkPassword !== password) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        } else {
            return true;
        }
    };

    return (
        <SignContainer>
            <SignInnerBox>
                <DefaultText>학번을 입력해주세요</DefaultText>
                <SignInputText placeholder='202312345' onChange={(e) => setSchoolId(e.target.value)}></SignInputText>
                <DefaultText>사용하실 비밀번호를 입력하세요</DefaultText>
                <SmallText>최소 8자, 최소 하나의 문자 및 하나의 숫자</SmallText>
                <SignInputText placeholder='비밀번호' onChange={(e) => setPassword(e.target.value)}></SignInputText>
                <SignInputText placeholder='비밀번호 확인' onChange={(e) => setCheckPassword(e.target.value)}></SignInputText>
            </SignInnerBox>

            <SignButton
                onClick={() => {
                    if (checkAllOfSingUpInfo()) {
                        setUserSignupInfo({
                            school_id: school_id,
                            password: password,
                            nickname: '',
                            profileImage: '',
                        });
                        setCurrentSection(3);
                    }
                }}
            >
                확인
            </SignButton>
        </SignContainer>
    );
};

export default SignupSection2;
