import axios from "axios"

export const checkDuplicationSchoolId = (shcool_id) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/check_school_id`, {
            headers: {
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