import React from 'react';
import {
    ProfileImage,
    Line,
    SignContainer,
    SignInputText,
    SignLayout,
    SignTitle,
    StepBox,
    NumberBtn,
    SignInnerBox,
    SignButton,
    TosBox,
    SignCheckBox,
    DefaultText,
    SmallText,
    SignDropDown,
} from './SignupStyles.js';
import './SignupStyles.css';

const Signup = () => {
    return (
        <SignLayout>
            <SignContainer>
                <SignTitle>회원가입</SignTitle>
                <StepBox>
                    <NumberBtn>1</NumberBtn>
                    <NumberBtn>2</NumberBtn>
                    <NumberBtn>3</NumberBtn>
                </StepBox>
                <SignInnerBox>
                    <TosBox>
                        제 1 조 [목적] 본 약관은 (주)그라비티(이하 ‘회사’)에서 제공하는 모바일 서비스(이하 ‘서비스’)를 이용하고자 하는
                        이용자와 회사 간에 서비스의 이용에 관한 기본적인 사항 및 기타 제반 사항을 규정하는 것을 목적으로 합니다. 제 2 조
                        [용어의 정의] 1. 모바일 서비스(이하 ‘서비스’) 회사가 제공하는 서비스 중 무선 휴대 통신 단말기용으로 제공되는 전용
                        게임 또는 서비스(소프트웨어 등을 포함)를 의미하며 제공되는 서비스는 회원제 서비스와 비회원제 서비스로 제공합니다. 2.
                        무선 휴대 통신용 단말기(이하 ‘단말기’) 회사가 제공하는 서비스를 다운로드 받아 사용할 수 있는 휴대폰, 모바일 OS가
                        설치된 스마트폰, PDA, 휴대용 게임기 등의 장비를 의미합니다. 3. 이용자 회사가 제공하는 서비스를 단말기에 다운로드
                        받아 이용하는 이용자로써 회원과 비회원을 의미합니다. 4. 회원 회사에서 제공하는 서비스를 제공받기 위하여 이용계약을
                        체결하고 이용자 아이디와 비밀번호를 등록한 개인을 의미합니다. 5. 비회원
                    </TosBox>
                    <SignCheckBox type='checkBox'></SignCheckBox>
                    <DefaultText>모든 약관에 동의합니다.</DefaultText>
                </SignInnerBox>
                <SignButton>확인</SignButton>
            </SignContainer>

            <SignContainer>
                <SignTitle>회원가입</SignTitle>
                <StepBox>
                    <NumberBtn>1</NumberBtn>
                    <NumberBtn>2</NumberBtn>
                    <NumberBtn>3</NumberBtn>
                </StepBox>
                <SignInnerBox>
                    <DefaultText>사용하실 아이디를 입력하세요</DefaultText>
                    <SignInputText placeholder='아이디'></SignInputText>
                    <DefaultText>사용하실 비밀번호를 입력하세요</DefaultText>
                    <SmallText>대소문자 구분 4~20 글자</SmallText>
                    <SignInputText placeholder='비밀번호'></SignInputText>
                    <SignInputText placeholder='비밀번호 확인'></SignInputText>

                    <DefaultText>학과를 선택하세요</DefaultText>
                    <SignDropDown></SignDropDown>
                </SignInnerBox>

                <SignButton>확인</SignButton>
            </SignContainer>

            <SignContainer>
                <SignTitle>회원가입</SignTitle>
                <StepBox>
                    <NumberBtn>1</NumberBtn>
                    <NumberBtn>2</NumberBtn>
                    <NumberBtn>3</NumberBtn>
                </StepBox>
                <SignInnerBox>
                    <DefaultText>사용하실 닉네임을 입력하세요</DefaultText>
                    <SmallText>닉네임은 설정 후 30일 이후에 변경 가능합니다.</SmallText>
                    <SignInputText placeholder='닉네임 입력'></SignInputText>
                    <Line></Line>
                    <DefaultText>프로필 사진을 첨부해주세요.</DefaultText>
                    <form>
                        <ProfileImage style={{ margin: '10px' }}></ProfileImage>
                        {/* 연결x */}
                        <label className='signup-profileImg-label' htmlFor='profileImg'>
                            사진 첨부하기
                        </label>
                        <input
                            className='signup-profileImg-input'
                            type='file'
                            accept='image/*'
                            id='profileImg'
                            style={{ display: 'none' }}
                        />
                    </form>
                </SignInnerBox>
                <SignButton>확인</SignButton>
            </SignContainer>
        </SignLayout>
    );
};

export default Signup;
