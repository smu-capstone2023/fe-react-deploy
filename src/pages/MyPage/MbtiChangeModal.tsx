import styled from "@emotion/styled";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import TextField from "component/TextField";
import { changeMbti } from "api/User/changeMbti";

export const MbtiChangeModal = ({ setModalOpen }: any) => {
    const toast = useToast();
    const [finishChange, setFinishChange] = useState(false);
    const [mbti, setMbti] = useState('');

    const closeModal = () => {
        setModalOpen(false);
    };

    const onclickChangeMbti = (mbti: string) => {
        if (mbti) {
            changeMbti(mbti).then((response)=>{
                if (response) {
                    toast({ 
                        title: "MBTI가 성공적으로 변경되었습니다.", 
                        position: "top", 
                        isClosable: true, 
                        variant: "subtle" 
                    });
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);
                } else {
                    setFinishChange(true);
                    toast({ 
                        title: "MBTI 변경에 실패했습니다. 다시 시도해주세요.", 
                        position: "top", 
                        isClosable: true, 
                        variant: "subtle" 
                    });
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);
                    window.location.reload();
                }
            })
        }
    };

    return (
        <ModalBackground>
             {finishChange === false && (
             <ModalContainer>
                    <GrClose
                        style={{ position: "absolute", left: "20px", top: "20px" }}
                        onClick={() => {
                            closeModal();
                        }}
                    />
                    <ModalLayout>
                        <ModalTitle>MBTI 변경</ModalTitle>
                        <ModalText>슴우님의 MBTI를 알려주세요!</ModalText>
                        <TextFieldLayout>
                                <TextField
                                    size={"small"}
                                    color={"gray"}
                                    placeholder={"MBTI 입력"}
                                    onChange={(e: any) => {
                                        setMbti(e.target.value);
                                    }}
                                />
                        </TextFieldLayout>
                        <ModalButton
                            onClick={() => {
                                if (mbti) {
                                    onclickChangeMbti(mbti);
                                } else {
                                    alert("변경할 MBTI를 작성해주세요!");
                                }
                            }}
                        >변경</ModalButton>
                    </ModalLayout>
            </ModalContainer>
        )}
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

    @media screen and (max-width: 768px) {
        padding: 40px 10px;
    }
`;

const ModalLayout = styled.div`
    display: flex;
    flex: 1;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextFieldLayout = styled.div`
    display: flex;
    width: 60%;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
`;

const ModalTitle = styled.p`
    display: flex;
    font-family: nexon-regular;
    color: black;
    font-size: 18px;
    margin: 0 0 20px 0;
    justify-content: center;
    align-items: center;
`;

const ModalText = styled.p`
    display: flex;
    width: 100%;
    font-family: nexon-regular;
    color: black;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

const ModalButton = styled.button`
    display: flex;
    width: 60%;
    background-color: #4169e1;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    color: white;

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

export default MbtiChangeModal;