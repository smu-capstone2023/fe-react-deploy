import { useState } from "react";
import LoginView from "../component/template/LoginView";
import { loginSite } from "api/User/loginSite";
import { useToast } from "@chakra-ui/react";
import { getUserInfo } from "../api/User/getUserInfo";
import { findPassword } from "../api/User/findPassword";
import Swal from "sweetalert2";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();

    // Enter 키가 눌렸을 때 로그인 실행
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onClickLoginButton();
        }
    };

    //비밀번호 찾기
    const onClickFindAccount = async () => {
        let school_id = "";
        let swalResult = "";
        swalResult = await Swal.fire({
            title: "학번을 입력해주세요",
            input: "text",
            inputPlaceholder: "학번 입력",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
        });

        if (swalResult.isConfirmed) {
            school_id = swalResult.value;
            if (school_id) {
                const response = await findPassword({ school_id: school_id });
                if (response) {
                    toast({ title: "임시 비밀번호가 메일로 전송되었습니다.", position: "top", isClosable: true, variant: "subtle" });
                } else {
                    toast({
                        title: "일시적인 오류로 임시 비밀번호 전송에 실패했습니다. 다시 시도해주세요.",
                        position: "top",
                        isClosable: true,
                        variant: "subtle",
                    });
                }
            }
        }
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
            onKeyPress={handleKeyPress}
        />
    );
};

export default Login;
