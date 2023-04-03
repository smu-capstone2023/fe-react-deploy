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
    AgreementTest,
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
                <AgreementTest>이용약관을 확인해주세요.</AgreementTest>
                <TosBox>
                <ol>
                        <li>스뮤즈 커뮤니티에 가입하려면 만 18세 이상이어야 합니다. 만 18세 미만인 경우 법적 보호자의 승인이 필요합니다.</li>
                        <li>가입 시 제공한 정보는 정확하고 최신 정보여야 합니다. 회원은 이러한 정보를 유지하고 업데이트해야 합니다.</li>
                        <li>스뮤즈 커뮤니티의 이용은 모두에게 공정하게 제공되어야 합니다. 어떠한 형태의 차별, 괴롭힘, 협박, 성적 괴롭힘, 폭력적인 행동, 음란물 게시 등이 금지됩니다.</li>
                        <li>
                        회원은 스뮤즈 커뮤니티에서 다음과 같은 행동을 금지합니다:
                        <ul>
                            <li>다른 회원을 괴롭히거나 협박하거나 폭력을 가하거나, 다른 회원의 개인 정보를 수집하거나 게시하지 않습니다.</li>
                            <li>스뮤즈 커뮤니티를 악용하여 스팸, 스팸 봇, 악성 코드, 바이러스, 웜, 트로이 목마 등을 게시하거나 전송하거나 유포하지 않습니다.</li>
                            <li>스뮤즈 커뮤니티에서 불법적인 활동을 하거나 다른 회원을 괴롭히거나 불쾌한 경험을 제공하지 않습니다.</li>
                            <li>회원은 스뮤즈 커뮤니티의 지적 재산권을 존중해야 합니다. 회원은 스뮤즈 커뮤니티에서 발견한 모든 저작물 및 콘텐츠의 저작권, 상표, 서비스 마크, 판매권, 판매 비밀, 기술적인 정보 등을 존중해야 합니다.</li>
                        </ul>
                        </li>
                        <li>
                        회원은 스뮤즈 커뮤니티의 이용 약관을 준수해야 합니다. 회원이 이 약관을 위반하는 경우, 스뮤즈 커뮤니티는 회원의 계정을 임의로 차단 또는 삭제할 수 있습니다.
                        </li>
                        <li>
                        스뮤즈 커뮤니티에서는 게시물, 댓글 등을 통해 다른 회원들과 의견을 공유할 수 있습니다. 그러나, 과정에서 다음과 같은 행동은 금지됩니다:
                        <ul>
                            <li>타인의 권리나 지적 재산권을 침해하는 내용의 게시물을 게시하지 않습니다.</li>
                            <li>불법적인 활동, 금지된 내용, 명예훼손, 음란물, 인종차별적인 내용, 광고성 게시물, 스팸 등을 게시하지 않습니다.</li>
                            <li>다른 회원을 비방하거나, 정치적인 성향이나 종교적인 성향 등으로 인해 다른 회원을 차별하거나, 공격하지 않습니다.</li>
                            <li>모욕적인 내용을 게시하거나 다른 회원의 신상정보를 공개하지 않습니다.</li>
                        </ul>
                        </li>
                        <li>
                        회원은 스뮤즈 커뮤니티의 서비스를 부당하게 이용하지 않아야 합니다. 다음과 같은 행동은 금지됩니다:
                        <ul>
                            <li>서비스 서버에 대한 과부하를 일으키거나, 다른 회원의 서비스 이용을 방해하거나, 서비스의 안정성을 해치는 행동을 하지 않습니다.</li>
                            <li>스뮤즈 커뮤니티를 악용하여 법적인 문제를 일으키는 행동을 하지 않습니다.</li>
                        </ul>
                        </li>
                        <li>
                        스뮤즈 커뮤니티는 회원이 위 약관을 준수하지 않는 경우, 이를 임의로 제한하거나 차단할 수 있습니다. 회원은 이러한 제한이나 차단 조치에 대해 이의를 제기할 수 있습니다.
                        </li>
                        <li>
                        스뮤즈 커뮤니티는 위 약관에 따라 서비스를 제공하며, 회원의 개인 정보는 스뮤즈 커뮤니티의 개인 정보 보호 정책에 따라 처리됩니다.
                        </li>
                        <li>
                        스뮤즈 커뮤니티는 위 약관을 언제든 변경할 수 있습니다. 변경된 약관은 스뮤즈 커뮤니티 홈페이지에 게시됩니다.
                        </li>
                        <li>
                        위 약관은 한국 법률에 따라 규정되며, 이에 따른 분쟁에 대한 관할은 한국 법원이 정합니다.
                        </li>
                        <li>
                        위와 같은 약관에 동의하고 스뮤즈 커뮤니티에 가입하실 경우, 회원으로서 스뮤즈 커뮤니티의 서비스를 이용하실 수 있습니다.
                        </li>
                    </ol>
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
