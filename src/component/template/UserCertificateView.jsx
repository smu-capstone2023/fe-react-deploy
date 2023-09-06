import React from "react";
import styled from "styled-components";
import Button from "../molecule/Button";

/**
 * @param onClickCompleteButton: () => {}
 * @returns
 */

const UserCertificateView = ({ onClickCompleteButton }) => {
    return (
        <>
            <SignupViewLayout>
                <SignUpContainer style={{ flex: 1 }}>
                    <img src={"../img/signimg2.png"} alt="signup" width={"100px"} />
                    <Title>회원 가입 절차</Title>

                    {/* 주의글 */}

                    <Title1>
                        <BoldText>(주의!)</BoldText>인증을 완료해야 로그인을 하실 수 있으니
                    </Title1>
                    <Title2> 아래 절차를 꼭 진행해주세요!</Title2>

                    {/*절차 박스*/}
                    <Box>
                        <BoxText>
                            1. <BoldText>office365</BoldText>에서 상명대학교 계정으로 로그인을 합니다
                        </BoxText>
                        <BoxText>
                            2. <BoldText>인증 메일</BoldText>을 확인해주세요!
                        </BoxText>
                        <BoxText>
                            3. 메일로 온, <BoldText>링크를 클릭</BoldText>해주시면 인증이 완료됩니다!{" "}
                        </BoxText>
                        <BoxText>
                            4. 메일 발송은 약 <BoldText>5~10분</BoldText> 소요될 수 있습니다.{" "}
                        </BoxText>
                    </Box>

                    {/* 스펨메일함 글 */}
                    <Title1> 만약 메일이 오지 않았다면, </Title1>
                    <Title2>
                        <BoldText>스팸 메일함</BoldText>을 확인해주세요!
                    </Title2>

                    {/*학과인증 메일 보기*/}
                    <Title1>인증 메일을 확인하려면</Title1>
                    <Title2>
                        <BoldText
                            onClick={()=>{
                                window.open("https://cloud.smu.ac.kr/");
                            }}
                            style={{cursor: "pointer"}}
                        >여기</BoldText>를 클릭하세요
                    </Title2>
                    <div style={{ marginTop: "15px", width: "100%" }}>
                        <Button title="네! 확인했습니다" onClick={onClickCompleteButton} />
                    </div>
                </SignUpContainer>
                <ImageContainer style={{ flex: 2 }} />
            </SignupViewLayout>
        </>
    );
};

//박스
const Box = styled.div`
    gap: 5px;
    margin-top: 30px;
    padding: 1.5em;
    border: 1.5px dashed #606060;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const BoxText = styled.p`
    font-family: nexon-regular;
    font-size: 13px;
    display: inline-block;
    color: #000000;
`;

const BoldText = styled.b`
    display: inline-block;
    font-family: nexon-bold;
    color: #4169e1;
`;

//글씨, title
const Title = styled.p`
    font-family: nexon-regular;
    font-size: 20px;
    @media (max-width: 760px) {
        font-size: 15px;
    }
`;

const Title1 = styled.p`
    display: inline-block;
    margin-top: 30px;
    font-family: nexon-regular;
    font-size: 15px;
    text-align: center;
    color: #000000;
`;

const Title2 = styled.p`
    font-family: nexon-regular;
    font-size: 15px;
    color: #000000;
`;

const SignupViewLayout = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: white;
    @media (max-width: 760px) {
        justify-content: center;
        flex-direction: column;
    }
`;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
`;

const ImageContainer = styled.div`
    background-image: url("../../img/signupframe.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 760px) {
        display: none;
    }
`;

export default UserCertificateView;
