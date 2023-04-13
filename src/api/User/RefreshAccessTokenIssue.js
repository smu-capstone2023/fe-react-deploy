import axios from "axios"

export const refreshAccessTokenIssue = () => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/refresh_access_token`, {
            headers : {
                Authorization: localStorage.getItem('access_token'),
                Authorization: localStorage.getItem('refresh_token'),
            },
        })
        .then((response) => {
            if (response.data.status_code === 240) {
                return response.data.access_token;
            }
        })
        .catch((response) => {
            console.log(response);
            return '';
        })
};