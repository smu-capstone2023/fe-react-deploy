const { default: axios } = require("axios")

const getUserInfo = () => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/user_info`, {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
            return {};
        })
}