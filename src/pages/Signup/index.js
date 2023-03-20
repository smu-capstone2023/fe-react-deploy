import React, { useState } from 'react';
import styled from 'styled-components';
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
                제15조(개인정보의 수집ㆍ이용)

                    ① 개인정보처리자는 다음 각 호의 어느 하나에 해당하는 경우에는 개인정보를 수집할 수 있으며 그 수집 목적의 범위에서 이용할 수 있다.

                    1. 정보주체의 동의를 받은 경우

                    2. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우

                    3. 공공기관이 법령 등에서 정하는 소관 업무의 수행을 위하여 불가피한 경우

                    4. 정보주체와의 계약의 체결 및 이행을 위하여 불가피하게 필요한 경우

                    5. 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우

                    6. 개인정보처리자의 정당한 이익을 달성하기 위하여 필요한 경우로서 명백하게 정보주체의 권리보다 우선하는 경우. 이 경우 개인정보처리자의 정당한 이익과 상당한 관련이 있고 합리적인 범위를 초과하지 아니하는 경우에 한한다.

                    

                    ② 개인정보처리자는 제1항제1호에 따른 동의를 받을 때에는 다음 각 호의 사항을 정보주체에게 알려야 한다. 다음 각 호의 어느 하나의 사항을 변경하는 경우에도 이를 알리고 동의를 받아야 한다.

                    1. 개인정보의 수집·이용 목적

                    2. 수집하려는 개인정보의 항목

                    3. 개인정보의 보유 및 이용 기간

                    4. 동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른 불이익이 있는 경우에는 그 불이익의 내용
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
