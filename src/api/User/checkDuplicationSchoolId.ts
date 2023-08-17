import axios from "axios";

export const checkDuplicationSchoolId = (school_id: number | string) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/check_school_id`, {
            headers: {
                school_id: school_id,
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
