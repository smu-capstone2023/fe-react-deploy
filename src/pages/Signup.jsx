import React, { useState } from "react";
import SignUpView from "../component/template/SignUpView";

const Signup = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const checkIdRegExp = () => {
        //Ex) 123456789(9자리 숫자)
        // console.log(id)
        return /^\d{9}/.test(id);
        
    }
    const checkPasswordExp = () => {
        //Ex) qwer1234! (숫자,문자 필수, 특수문자 허용, 8~16자리)
        return(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,16}$/.test(password))
    };

    const checkRePasswordExp = () => {
        if (password === rePassword) {
            return(true)
        } else {
            return(false)
        }
    };

    const onClickSignupButton = () => {
        if (checkIdRegExp() == false) {console.log('ID 형식을 확인해주세요.')} 
        else if (checkPasswordExp() == false) {alert('비밀번호 형식을 확인해주세요.')} 
        else if (checkRePasswordExp() == false) {alert('비밀번호가 일치하지 않습니다.')} 

    };

    return (
        <SignUpView
            onChangeId={setId}
            onChangePassword={setPassword}
            onChangeRePassword={setRePassword}
            onClickSignupButton={onClickSignupButton}
        />
    );
};

export default Signup;
