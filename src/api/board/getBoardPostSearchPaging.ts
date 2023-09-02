import axios from "axios";

export const getBoardPostSearchPaging = (keyword: string, now_page: string | number, per_page: string | number, sorting: string) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/search_paging?keyword=${keyword}&now_page=${now_page}&per_page=${per_page}`, {
            headers: {
                Authorization: localStorage.getItem("access_token"),
                sorting: sorting,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            return {};
        });
};
