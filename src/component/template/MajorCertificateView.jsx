import React from "react";
import styled from "styled-components";
import Footer from "../organism/Footer";
import ImageUploadButton from "../molecule/ImageUploadButton";
import InputTextAreaInput from "../molecule/InputTextAreaBox";
import Button from "../molecule/Button";
import ImageView from "../molecule/ImageView";

/**
 * @param onClickImageUploadButton: () => {}
 * @param onClickDeleteImageButton: () => {}
 * @param onChangeContent: () => {}
 * @param onClickCompleteButton: () => {}
 * @param imageUrl: string;
 * @returns
 */

const MajorCertificateView = ({ onClickImageUploadButton, onClickDeleteImageButton, onChangeContent, onClickCompleteButton, imageUrl }) => {
    return (
        <>
            <MCVLayout>
                <div style={{ display: "flex", justifyContent: "center", fontFamily: "nexon-regular" }}>학과 인증 절차</div>

                <div style={{ margin: "1rem 0" }}>
                    <p style={{ fontFamily: "nexon-regular", fontSize: ".9em" }}>학과를 인증할 수 있는 이미지를 첨부해주세요.</p>
                    <p style={{ fontFamily: "nexon-regular", color: "#747474", fontSize: ".7em" }}>사진을 기준으로 학과가 추가됩니다.</p>
                    <p style={{ fontFamily: "nexon-regular", color: "#4169E1", fontSize: ".7em" }}>(사진엔 학번도 들어가있어야 합니다!)</p>
                </div>

                <div style={{ width: "100%", height: "15em" }}>
                    {
                    imageUrl === '' ? <ImageUploadButton iconSize={"1.5rem"} size={"100%"} onClick={onClickImageUploadButton}/>  : <ImageView imageUrl={imageUrl} onClickDelete={onClickDeleteImageButton} iconSize={"1.5rem"} width={'100%'} height={'100%'} />
                    }
                    
                </div>

                <div style={{ margin: "2rem 0 1rem 0" }}>
                    <p style={{ fontFamily: "nexon-regular", fontSize: ".9em" }}>인증 절차에 필요한 기타 말씀해주실 것을 적어주세요!</p>
                    <p style={{ fontFamily: "nexon-regular", color: "#747474", fontSize: ".7em" }}>(선택)</p>
                </div>

                <InputTextAreaInput placeholder={"내용을 입력해주세요."} onChange={(e) => onChangeContent(e)} height={"100%"} />

                <div
                    style={{
                        fontFamily: "nexon-regular",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "2rem 0",
                    }}
                >
                    <Button title={"학과 인증 요청하기"} onClick={onClickCompleteButton} width={"100%"} height={"2rem"} fontSize={"1em"} />
                </div>
            </MCVLayout>
            <Footer />
        </>
    );
};

const MCVLayout = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
    padding-bottom: 1rem;
    height: 30rem;

    @media (max-width: 768px) {
        width: 95%;
        font-size: 0.7em;
    }
`;

export default MajorCertificateView;
