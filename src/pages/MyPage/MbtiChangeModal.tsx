import styled from "@emotion/styled";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import { changeMbti } from "api/User/changeMbti";
import { mbti_list } from "./data";
import MbtiButton from "./MbtiButton";

export const MbtiChangeModal = ({ setModalOpen }: any) => {
    const toast = useToast();
    const [mbti, setMbti] = useState<string | null>("");

    const closeModal = () => {
        setModalOpen(false);
    };

    const onclickChangeMbti = (mbti: string) => {
        if (mbti) {
            changeMbti(mbti).then((response: any) => {
                if (response) {
                    toast({
                        title: "MBTI가 성공적으로 변경되었습니다.",
                        position: "top",
                        isClosable: true,
                        variant: "subtle",
                    });
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);
                } else {
                    toast({
                        title: "MBTI 변경에 실패했습니다. 다시 시도해주세요.",
                        position: "top",
                        isClosable: true,
                        variant: "subtle",
                    });
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);
                    window.location.reload();
                }
            });
        }
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <GrClose
                    style={{ position: "absolute", right: "20px", top: "20px" }}
                    onClick={() => {
                        closeModal();
                    }}
                />
                <ModalLayout>
                    <ModalTitle>MBTI를 선택해주세요</ModalTitle>
                    <ListButtonContainer>
                        {mbti_list.map((item: string) => {
                            return (
                                <MbtiButton
                                    title={item}
                                    key={item}
                                    onClick={() => {
                                        setMbti(item);
                                    }}
                                    background={mbti === item ? "#4169e1" : ""}
                                ></MbtiButton>
                            );
                        })}
                    </ListButtonContainer>
                    <ModalButton
                        onClick={() => {
                            if (mbti) {
                                onclickChangeMbti(mbti);
                            } else {
                                toast({ title: "변경할 MBTI를 선택해주세요", position: "top", isClosable: true, variant: "subtle" });
                            }
                        }}
                    >
                        저장하기
                    </ModalButton>
                </ModalLayout>
            </ModalContainer>
        </ModalBackground>
    );
};

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const ModalContainer = styled.div`
    display: flex;
    width: 55%;
    height: auto;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 8px;
    padding: 40px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 40px 10px;
        width: 80%;
    }
`;

const ModalLayout = styled.div`
    display: flex;
    width: 18rem;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 380px) {
        width: 14rem;
    }
`;

const ModalTitle = styled.p`
    display: flex;
    font-family: nexon-regular;
    color: black;
    font-size: 18px;
    margin: 20px 0 0 0;
    justify-content: center;
    align-items: center;
`;

const ListButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 20rem;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
    @media screen and (max-width: 380px) {
        width: 16.5rem;
        gap: 5px;
    }
`;

const ModalButton = styled.button`
    display: flex;
    heigth: 40px;
    border: solid 1px #4169e1;
    border-radius: 5px;
    padding: 10px 30px;
    background: #ffffff;
    margin-left: auto;

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
`;
export default MbtiChangeModal;
