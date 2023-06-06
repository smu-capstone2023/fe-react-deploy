import React from "react";
import Footer from "../organism/Footer";
import SectionListHeader from "../molecule/SectionListHeader";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
/**
 * @param onClickRevoke: () => {}
 * @param onClickLogout: () => {}
 * @param changeNickname: (value: string) => void;
 * @param changePassword: (value: string) => void;
 * @returns
 */

const MypageView = ({ onClickRevoke, onClickLogout, changeNickname, changePassword }) => {
    const [inputValue, setInputValue] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
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
                            Swal.fire({
                                title: "닉네임 변경",
                                input: "text",
                                inputLabel: "변경할 닉네임을 써주세요!",
                                inputValue: inputValue,
                                showCancelButton: true,
                                inputValidator: (value) => {
                                    if (!value) {
                                        return "변경할 닉네임을 입력해주세요!";
                                    }
                                },
                            }).then((result) => {
                                if (result.value) {
                                    changeNickname(result.value);
                                }
                            });
                        }}
                    ></SectionListHeader>
                    <SectionListHeader
                        title={"프로필 이미지 변경"}
                        onClick={() => {
                            toast({ title: "준비중입니다.", position: "top", isClosable: true, variant: "subtle" });
                        }}
                    ></SectionListHeader>
                    <SectionListHeader
                        title={"비밀번호 변경"}
                        onClick={() => {
                            Swal.fire("준비중인 기능입니다.");
                            // Swal.fire({
                            //     title: "비밀번호 변경",
                            //     input: "password",
                            //     inputLabel: "새로 변경할 비밀번호를 써주세요!",
                            //     showCancelButton: true,
                            //     inputValidator: (value) => {
                            //         if (!value) {
                            //             return "변경할 비밀번호를 입력해주세요!";
                            //         }
                            //     },
                            // }).then((result) => {
                            //     if (result.value) {
                            //         const newPassword = result.value;
                            //         changePassword(newPassword);
                            //     }
                            // });
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
