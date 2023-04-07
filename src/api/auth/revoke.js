import axios from 'axios';
export const revoke = (accessToken) => {
    return axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/auth/revoke`, {
            headers: {
                Authorization: accessToken,
            },
        })
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
