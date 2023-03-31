import React, { useState } from 'react';
import { SignContainer, SignInputText, SignInnerBox, SignButton, DefaultText, SmallText } from './SignupStyles.js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './SignupStyles.css';

const SignupSection2 = ({ setCurrentSection, setUserSignupInfo }) => {
    const [school_id, setSchoolId] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const selectedMajorList = [];
    const majorOptions = [
        { label: '컴퓨터과학과', value: '컴퓨터과학과' },
        { label: '경제학과', value: '경제학과' },
        { label: '휴먼지능정보공학전공', value: '휴먼지능정보공학전공' },
    ];
    const animatedComponents = makeAnimated();

    const checkEmailRegExp = (school_id) => {
        const emailRegex = new RegExp('^\\d{9}@sangmyung\\.kr$');
        return emailRegex.test(school_id);
    };

    const checkPasswordRegExp = (password) => {
        //@sangmyung.kr로 아이디 제한
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
        return passwordRegex.test(password);
    };

    const checkAllOfSingUpInfo = () => {
        console.log(selectedMajorList);
        if (!checkEmailRegExp(school_id)) {
            alert('이메일 형식을 확인해주세요.');
            return false;
        } else if (!checkPasswordRegExp(password)) {
            alert('비밀번호 형식을 확인해주세요.');
            return false;
        } else if (checkPassword !== password) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        } else if (selectedMajorList.length === 0) {
            alert('학과를 선택해주세요');
            return false;
        } else {
            return true;
        }
    };

    return (
        <SignContainer>
            <SignInnerBox>
                <DefaultText>사용하실 이메일을 입력하세요</DefaultText>
                <SignInputText placeholder='example@sangmyung.kr' onChange={(e) => setSchoolId(e.target.value)}></SignInputText>
                <DefaultText>사용하실 비밀번호를 입력하세요</DefaultText>
                <SmallText>최소 8자, 최소 하나의 문자 및 하나의 숫자</SmallText>
                <SignInputText placeholder='비밀번호' onChange={(e) => setPassword(e.target.value)}></SignInputText>
                <SignInputText placeholder='비밀번호 확인' onChange={(e) => setCheckPassword(e.target.value)}></SignInputText>
                <DefaultText>학과를 선택하세요</DefaultText>
                <Select
                    defaultValue={null}
                    options={majorOptions}
                    isMulti
                    components={animatedComponents}
                    onChange={(e) => e.forEach((element) => selectedMajorList.push(element.value))}
                />
            </SignInnerBox>

            <SignButton
                onClick={() => {
                    if (checkAllOfSingUpInfo()) {
                        setUserSignupInfo({
                            school_id: school_id,
                            password: password,
                            majorList: selectedMajorList,
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
