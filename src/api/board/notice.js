import axios from 'axios';
export const getNotice = (postLen = 4) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/notice`)
        .then((response) => {
            return response.data.slice(0, postLen);
        })
        .catch((response) => {
            return [];
        });
};
