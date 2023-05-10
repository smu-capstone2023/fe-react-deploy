import React, { useState } from "react";
import LoginView from "../component/template/LoginView";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onClickFindAccount = () => {
        alert("준비중입니다");
    };

    const onClickSignUp = () => {
        window.location.href = "/signup";
    };

    const setUserInfoInLocalStorage = (userId, accessToken, refreshToken) => {
        //localStorage 사용법입니다. 나중에 사용될 수 있으니 한 번 익혀두시길 바랍니다.
        localStorage.setItem("user_id", userId);
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
    };

    const onClickLoginButton = () => {
        //여기에 로그인 버튼을 눌렀을 때 발생하는 로직을 구현해주세요.
    };

    return (
        <LoginView
            onChangeId={setId}
            onChangePassword={setPassword}
            onClickFindAccount={onClickFindAccount}
            onClickSignUp={onClickSignUp}
            onClickLoginButton={onClickLoginButton}
        />
    );
};

export default Login;
