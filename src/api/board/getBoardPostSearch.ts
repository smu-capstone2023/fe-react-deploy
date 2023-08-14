import axios from "axios";

export const getBoardPostSearch = (keyword: string, sorting: string) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/search?keyword=${keyword}`, {
            headers: {
                Authorization: localStorage.getItem("access_token"),
                sorting: sorting,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
            return {};
        });
};
