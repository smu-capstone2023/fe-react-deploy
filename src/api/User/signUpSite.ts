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
            console.error("signupSite", error);
            return false;
        });
};
