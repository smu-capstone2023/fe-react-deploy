import axios from "axios"

export const getNewAccessToken = () => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/refresh_access_token`, {
            headers : {
                access_token : localStorage.getItem('access_token'),
                refresh_token : localStorage.getItem('refresh_token'),
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