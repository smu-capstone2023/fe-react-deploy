import axios from "axios"

export const getBoardPostSearchCursor = (keyword, last_id, per_page) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/search_cursor?keyword=${keyword}&last_id=${last_id}&per_page=${per_page}`, {
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
};