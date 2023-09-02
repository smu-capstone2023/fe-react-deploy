import axios from "axios";

export const loginSite = (school_id: string, password: string) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
            school_id: school_id,
            password: password,
        })
        .then((response) => {
            if (response.data.status_code === 200) {
                return {
                    access_token: response.data.access_token,
                    refresh_token: response.data.refresh_token,
                    user_id: response.data.user_id,
                };
            }
        })
        .catch((error) => {
            if (error.response.status === 405) {
                alert("메일인증을 완료해주세요!");
            }
            if (error.response.status === 403) {
                alert("로그인 정보가 없습니다!");
            }
            return {};
        });
};
