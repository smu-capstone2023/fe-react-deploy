import axios from "axios";

export const signUpSite = (school_id: string, nickname: string, password: string) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}/auth/join`, {
            school_id: school_id,
            nickname: nickname,
            password: password,
        })
        .then((response) => {
            if (response.data.status_code === 201) {
                return response.data;
            }
        })
        .catch((error) => {
            if (error.response.status === 400) {
                alert("이미 가입된 사용자입니다.");
            }
            if (error.response.status === 406) {
                alert("해당 닉네임은 사용할 수 없습니다. 다른 닉네임을 사용해주세요");
            }
            else {
                console.error("signupSite", error);
                return false;
            }
        });
};
