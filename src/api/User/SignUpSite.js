import axios from "axios";

export const signUpSite = (shcool_id, nickname, password, image) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}/auth/join`, {
            school_id: shcool_id,
            nickname: nickname,
            password: password,
            image: image,
        })
        .then((response) => {
            if (response.data.status_code === 201) {
                return response.data;
            }
        })
        .catch((response) => {
            console.log(response);
            return false;
        });
};
