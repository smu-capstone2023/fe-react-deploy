import React, { useState } from "react";
import LoginView from "../component/template/LoginView";
import { loginSite } from "../api/User/LoginSite";

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
        localStorage.setItem("user_id", userId);
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
    };

    const onClickLoginButton = () => {
        loginSite(id, password)
            .then((response) => {
                if ( response.access_token ) {
                    setUserInfoInLocalStorage(id, response.access_token, response.refresh_token);
                    window.location.href = '/'                  
                }
                else {
                    alert('로그인 정보가 없습니다. 다시 시도해주세요! ')}
            })
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
