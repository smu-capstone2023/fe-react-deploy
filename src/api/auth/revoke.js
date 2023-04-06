import axios from 'axios';
export const revoke = (schoolId, accessToken) => {
    return axios
        .post(
            `${process.env.REACT_APP_SERVER_URL}/auth/withdrawal`,
            {
                school_id: schoolId,
            },
            {
                headers: {
                    Authorization: accessToken,
                },
            }
        )
        .then((respone) => {
            if (respone.status === 201) {
                return true;
            }
        })
        .catch((response) => {
            console.log(response);
            return false;
        });
};
