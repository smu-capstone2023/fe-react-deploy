import axios from "axios"

export const getBoardPagingByPage = (board_id, now_page, per_page, keyword, sorting) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/paging?board_id=${board_id}&now_page=${now_page}&per_page=${per_page}&keyword=${keyword}`, {
            headers: {
                Authorization: localStorage.getItem('access_token'),
                sorting : sorting,
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