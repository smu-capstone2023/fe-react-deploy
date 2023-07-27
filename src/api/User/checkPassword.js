import axios from "axios"

export const checkPassword = (school_id, password) => {
    return axios
        .get(
            `${process.env.REACT_APP_SERVER_URL}/auth/check_password`,
            {
                school_id : school_id,
                password : password,
            },
            {
                headers: {
                    Authorization: localStorage.getItem("access_token"),
                },
            }
        )
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
            return false;
        });
};