import React from "react";
import Footer from "../organism/Footer";
import SectionListHeader from "../molecule/SectionListHeader";
import styled from "styled-components";

/**
 * @param onClickRevoke: () => {}
 * @param onClickLogout: () => {}
 * @returns
 */

const MypageView = ({ onClickRevoke, onClickLogout }) => {
    return (
        <>
            <SectionListLayout>
                <SectionList1>
                    <SectionListHeader
                        title={"학과인증"}
                        onClick={() => (window.location.href = "/major-certification")}
                    ></SectionListHeader>
                    <SectionListHeader
                        title={"닉네임 설정"}
                        onClick={() => {
                            //여기에 swal inputAlert가 띄워져야 합니다.
                        }}
                    ></SectionListHeader>
                    <SectionListHeader
                        title={"프로필 이미지 변경"}
                        onClick={() => {
                            //여기에 swal alert가 띄워져야 합니다. ('준비중 입니다!')
                        }}
                    ></SectionListHeader>
                    <SectionListHeader
                        title={"비밀번호 변경"}
                        onClick={() => {
                            //여기에 swal inputAlert가 띄워져야 합니다.
                        }}
                    ></SectionListHeader>
                    <SectionListHeader title={"로그아웃"} onClick={onClickLogout}></SectionListHeader>
                    <SectionListHeader title={"탈퇴하기"} onClick={onClickRevoke}></SectionListHeader>
                </SectionList1>

                <SectionList2>
                    <p style={{ color: "gray", fontFamily: "nexon-regular" }}>앱 정보</p>
                    <SectionListHeader title={"개인정보 처리방침"} onClick={() => (window.location.href = "/privacy")}></SectionListHeader>
                    <SectionListHeader title={"앱 버전"} onClick={() => (window.location.href = "/app")}></SectionListHeader>
                </SectionList2>
            </SectionListLayout>
            <Footer />
        </>
    );
};

const SectionListLayout = styled.div`
    display: flex;
    flex: 1;
    gap: 2rem;
    padding: 2rem;
    font-size: 1em;
    @media (max-width: 768px) {
        padding: 1rem;
        display: block;
        font-size: 0.8em;
    }
`;
const SectionList1 = styled.div`
    flex: 1;

    @media (max-width: 768px) {
        padding-bottom: 3rem;
    }
`;
const SectionList2 = styled.div`
    flex: 1;
`;

export default MypageView;
