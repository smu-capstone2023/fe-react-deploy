import React, { useState, useRef } from "react";
import SignUpView from "../component/template/SignUpView";
import { signUpSite } from "../api/User/signUpSite";

const Signup = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [nickname, setNickname] = useState("");
 
    // cursor 활성화용 ref
    const idInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const rePasswordInputRef = useRef(null);
    
    const checkIdRegExp = () => {
        //Ex) 123456789(9자리 숫자'만')
        return /^[0-9]{9}$/.test(id);
    };

    const checkPasswordExp = () => {
        //Ex) qwer1234! (숫자,문자 필수, 특수문자 허용, 8~16자리)
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,16}$/.test(password);
    };

    const checkRePasswordExp = () => {
        if (password === rePassword) {
            return true;
        } else {
            return false;
        }
    };

    const onClickSignupButton = () => {
        let invalidField = null;

        if (checkIdRegExp() === false) {
            alert("ID 형식을 확인해주세요.");
            invalidField = idInputRef;
        } else if (nickname === "") {
            alert("닉네임을 입력해주세요.");
            invalidField = null;    //닉네임은 상관x
        } else if (checkPasswordExp() === false) {
            alert("비밀번호 형식을 확인해주세요.");
            invalidField = passwordInputRef;
        } else if (checkRePasswordExp() === false) {
            alert("비밀번호가 일치하지 않습니다.");
            invalidField = rePasswordInputRef;
        } else {
            signUpSite(id, nickname, password).then((response) => {
                if (response) {
                    window.location.href = "/user-certification";
                } else {
                    alert("네트워크 문제! 잠시후에 다시 시도해주세요! ");
                }
            });
        }
        // 형식 안맞는 input으로 cursor 활성화
        if (invalidField) {
            invalidField.current.focus();
        }
    };

    return (
        <SignUpView
            onChangeNickname={setNickname}
            onChangeId={setId}
            onChangePassword={setPassword}
            onChangeRePassword={setRePassword}
            onClickSignupButton={onClickSignupButton}
            idInputRef={idInputRef}
            passwordInputRef={passwordInputRef}
            rePasswordInputRef={rePasswordInputRef}
        />
    );
};

export default Signup;
