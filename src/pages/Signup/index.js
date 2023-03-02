import React, { useState } from 'react';
import {
    SignContainer,
    SignLayout,
    SignTitle,
    StepBox,
    NumberBtn,
    SignInnerBox,
    SignButton,
    TosBox,
    SignCheckBox,
    DefaultText,
    SignupTitleLayout,
    SignupAgreeLayout,
} from './SignupStyles.js';
import SignupSection2 from './SignupSection2.js';
import SignupSection3 from './SignupSection3';
import './SignupStyles.css';

const SignupTitle = () => {
    return (
        <>
            <SignupTitleLayout>
                <SignTitle>회원가입</SignTitle>
                <StepBox>
                    <NumberBtn>1</NumberBtn>
                    <NumberBtn>2</NumberBtn>
                    <NumberBtn>3</NumberBtn>
                </StepBox>
            </SignupTitleLayout>
        </>
    );
};
const SignupSection1 = ({ setCurrentSection }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <SignContainer>
            <SignInnerBox>
                <TosBox>
                    제 1 조 [목적] 본 약관은 (주)그라비티(이하 ‘회사’)에서 제공하는 모바일 서비스(이하 ‘서비스’)를 이용하고자 하는 이용자와
                    회사 간에 서비스의 이용에 관한 기본적인 사항 및 기타 제반 사항을 규정하는 것을 목적으로 합니다. 제 2 조 [용어의 정의] 1.
                    모바일 서비스(이하 ‘서비스’) 회사가 제공하는 서비스 중 무선 휴대 통신 단말기용으로 제공되는 전용 게임 또는
                    서비스(소프트웨어 등을 포함)를 의미하며 제공되는 서비스는 회원제 서비스와 비회원제 서비스로 제공합니다. 2. 무선 휴대
                    통신용 단말기(이하 ‘단말기’) 회사가 제공하는 서비스를 다운로드 받아 사용할 수 있는 휴대폰, 모바일 OS가 설치된 스마트폰,
                    PDA, 휴대용 게임기 등의 장비를 의미합니다. 3. 이용자 회사가 제공하는 서비스를 단말기에 다운로드 받아 이용하는 이용자로써
                    회원과 비회원을 의미합니다. 4. 회원 회사에서 제공하는 서비스를 제공받기 위하여 이용계약을 체결하고 이용자 아이디와
                    비밀번호를 등록한 개인을 의미합니다. 5. 비회원
                </TosBox>
                <SignupAgreeLayout>
                    <SignCheckBox
                        type='checkbox'
                        onClick={() => {
                            setIsChecked(!isChecked);
                        }}
                    ></SignCheckBox>
                    <DefaultText>모든 약관에 동의합니다.</DefaultText>
                </SignupAgreeLayout>
            </SignInnerBox>
            <SignButton
                onClick={() => {
                    if (isChecked) {
                        setCurrentSection(2);
                    } else {
                        alert('약관동의를 해주세요.');
                    }
                }}
            >
                확인
            </SignButton>
        </SignContainer>
    );
};

const Signup = () => {
    const [currentSection, setCurrentSection] = useState(1);
    const [userSignupInfo, setUserSignupInfo] = useState({});
    return (
        <SignLayout>
            <SignupTitle />
            {currentSection === 1 ? <SignupSection1 setCurrentSection={setCurrentSection} /> : <></>}
            {currentSection === 2 ? <SignupSection2 setCurrentSection={setCurrentSection} setUserSignupInfo={setUserSignupInfo} /> : <></>}
            {currentSection === 3 ? <SignupSection3 userSignupInfo={userSignupInfo} /> : <></>}
        </SignLayout>
    );
};

export default Signup;
