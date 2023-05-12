import React, { useState } from "react";
import SignUpView from "../component/template/SignUpView";
import PostContent from "../component/organism/PostContent";

const Signup = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const checkIdRegExp = () => {
        //여기에 id가 학번 형식이 맞는지 체크하는 로직을 작성해주세요.
    };

    const checkPasswordExp = () => {
        //여기에 비밀번호 형식이 맞는지 체크하는 로직을 작성해주세요
    };

    const checkRePasswordExp = () => {
        //여기에 비밀번호와 re비밀번호의 입력값이 같은지 체크하는 로직을 작성해주세요.
    };

    const onClickSignupButton = () => {
        //api/signUpSite 함수를 사용해주세요.
        //위에 정의된 함수 3개를 이용해서 작성해주세요.
        //여기에 회원가입 버튼을 누르면 발생할 로직을 작성해주세요.
    };

    return (
        // <SignUpView
        //     onChangeId={setId}
        //     onChangePassword={setPassword}
        //     onChangeRePassword={setRePassword}
        //     onClickSignupButton={onClickSignupButton}
        // />
        <PostContent/>
    );
};

export default Signup;
