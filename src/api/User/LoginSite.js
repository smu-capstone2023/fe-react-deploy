import axios from "axios";

export const loginSite = (school_id, password) => {
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
        .catch((response) => {
            alert("loginStie", response);
            console.error("loginSite", response);
            return {};
        });
};
