import React, { useState } from "react";
import LoginView from "../component/template/LoginView";
import { loginSite } from "../api/User/LoginSite";
import { useToast } from "@chakra-ui/react";
import { getUserInfo } from "../api/User/getUserInfo";
const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    //아이디/비밀번호 찾기
    const onClickFindAccount = () => {
        toast({ title: "준비중입니다.", position: "top", isClosable: true, variant: "subtle" });
    };
    //회원가입
    const onClickSignUp = () => {
        window.location.href = "/signup";
    };

    const setUserTokenInLocalStorage = (userId, accessToken, refreshToken) => {
        localStorage.setItem("user_id", userId); //TODO: 수정필요
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
    };

    const setUserInfoInLocalStorage = (userName, schoolId, profileImageUrl, majorList) => {
        localStorage.setItem("user_name", userName);
        localStorage.setItem("school_id", schoolId);
        localStorage.setItem("profile_img_url", profileImageUrl);
        localStorage.setItem("majorList", JSON.stringify(majorList));
    };

    const onClickLoginButton = () => {
        loginSite(id, password).then((response) => {
            if (response.access_token) {
                const { access_token, refresh_token, user_id } = response;
                setUserTokenInLocalStorage(user_id, access_token, refresh_token);

                getUserInfo().then((response) => {
                    if (response === {}) {
                        alert("네트워크 문제! 잠시 다시 시도해주세요");
                    } else {
                        const { username, school_id, profile_img_url, majors } = response;
                        setUserInfoInLocalStorage(username, school_id, profile_img_url, majors);
                        window.location.href = "/";
                    }
                });
            } else {
                alert("로그인 정보가 없습니다. 다시 시도해주세요! ");
            }
        });
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
