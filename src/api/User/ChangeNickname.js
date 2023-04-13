import axios from "axios"

export const changeNickname = (nickname) => {
    return axios
        .put(`${process.env.REACT_APP_SERVER_URL}/auth/user/nickname`, 
        {
            nickname : nickname,
        },
        {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            return response.data.nickname;
        })
        .catch((response) => {
            console.log(response);
            return '';
        })
}