import axios from "axios"

export const getBoardPostSearchPaging = (keyword, now_page, per_page, sorting) => {
    return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/board/search_paging?keyword=${keyword}&now_page=${now_page}&per_page=${per_page}`, {
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
}