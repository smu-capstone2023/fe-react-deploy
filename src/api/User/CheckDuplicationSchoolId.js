import axios from "axios"

export const CheckDuplicationSchoolId = (shcool_id) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/check_school_id`, {
            headers: {
                Authorization: localStorage.getItem('access_token'),
                school_id : shcool_id,
            },
        })
        .then((response) => {
            if (response.data.status_code === 200) {
                return true;
            }
        })
        .catch((response) => {
            console.log(response);
            return false;
        });
};