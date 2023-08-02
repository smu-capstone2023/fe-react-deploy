import styled from "@emotion/styled";
import React, { useState } from "react";
import TextField from "component/TextField";
import { GrClose } from "react-icons/gr";
import { useToast } from "@chakra-ui/react";
import { changePassword } from "../../api/User/changePassword";
import { checkPassword } from "api/User/checkPassword";
import { useSelector } from "react-redux";

export const PasswordChangeModal = ({ setModalOpen }: any) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [oldPasswordCheck, setOldPasswordCheck] = useState(false);
    const [newPasswordCheck, setnewPasswordCheck] = useState("");
    const [finishChange, setFinishChange] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const toast = useToast();
    const userInfoData = useSelector((state: any) => state.user);

    const checkOldPassword = () => {
        const schoolId = userInfoData.school_id;
        if (schoolId && oldPassword) {
            checkPassword(schoolId, oldPassword).then((response) => {
                setOldPasswordCheck(response);
                if (!response) {
                    setIncorrectPassword(true);
                }
            });
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const onClickChangePassword = () => {
        if (oldPassword && newPassword) {
            changePassword(oldPassword, newPassword).then((response) => {
                if (response && newPassword === newPasswordCheck) {
                    setFinishChange(true);
                    localStorage.clear();
                    toast({ title: "비밀번호가 성공적으로 변경되었습니다.", position: "top", isClosable: true, variant: "subtle" });
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);
                } else {
                    setFinishChange(true);
                    toast({
                        title: "비밀번호 변경에 실패했습니다. 다시 시도해주세요.",
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

    const checkPasswordExp = (password: string) => {
        //Ex) qwer1234! (숫자,문자 필수, 특수문자 허용, 8~16자리)
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,16}$/.test(password);
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
                        <ModalTitle>비밀번호 변경</ModalTitle>
                        <ModalInputLayout>
                            {!oldPasswordCheck ? (
                                <>
                                    <ModalText>현재 비밀번호</ModalText>
                                    <TextField
                                        type={"password"}
                                        size={"small"}
                                        color={"gray"}
                                        placeholder={"기존 비밀번호"}
                                        value={oldPassword}
                                        onChange={(e: any) => {
                                            setOldPassword(e.target.value);
                                        }}
                                    ></TextField>
                                    {incorrectPassword && <ModalWarningText>올바르지 않은 비밀번호입니다.</ModalWarningText>}
                                </>
                            ) : (
                                <>
                                    <ModalText>변경 비밀번호</ModalText>
                                    <TextField
                                        type={"password"}
                                        size={"small"}
                                        color={"gray"}
                                        placeholder={"신규 비밀번호"}
                                        value={newPassword}
                                        onChange={(e: any) => {
                                            setNewPassword(e.target.value);
                                        }}
                                    ></TextField>
                                    {checkPasswordExp(newPassword) ? (
                                        <></>
                                    ) : (
                                        <ModalWarningText>특수문자, 숫자, 영어를 포함 8자 이상 작성해주세요.</ModalWarningText>
                                    )}

                                    <ModalText>비밀번호 확인</ModalText>
                                    <TextField
                                        type={"password"}
                                        size={"small"}
                                        color={"gray"}
                                        placeholder={"신규 비밀번호"}
                                        value={newPasswordCheck}
                                        onChange={(e: any) => {
                                            setnewPasswordCheck(e.target.value);
                                        }}
                                    ></TextField>
                                    {newPassword !== newPasswordCheck && <ModalWarningText>비밀번호가 일치하지 않습니다.</ModalWarningText>}
                                </>
                            )}
                        </ModalInputLayout>
                        <ModalButton
                            onClick={() => {
                                if (oldPassword) {
                                    checkOldPassword();
                                }
                                if (oldPasswordCheck && newPassword === newPasswordCheck) {
                                    onClickChangePassword();
                                }
                            }}
                        >
                            다음
                        </ModalButton>
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
`;

const ModalContainer = styled.div`
    display: flex;
    width: 70%;
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
    gap: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ModalInputLayout = styled.div`
    display: flex;
    width: 70%;
    gap: 10px;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

const ModalTitle = styled.p`
    display: flex;
    font-family: nexon-regular;
    color: black;
    font-size: 18px;
`;

const ModalText = styled.p`
    display: flex;
    width: 100%;
    font-family: nexon-regular;
    color: black;
`;

const ModalButton = styled.button`
    display: flex;
    max-width: 70%;
    width: 90%;
    background-color: #4169e1;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    color: white;

    @media screen and (max-width: 768px) {
        max-width: 90%;
    }
`;

const ModalWarningText = styled.p`
    color: red;
    font-family: nexon-light;
    font-size: 10px;
`;

export default PasswordChangeModal;
