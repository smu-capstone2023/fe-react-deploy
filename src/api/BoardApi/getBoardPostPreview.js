import axios from "axios";

export const getBoardPostPreview = (board_id, limit_post_num) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/preview?board_id=${board_id}&limit_post_num=${limit_post_num}`, {
            headers: {
                Authorization: localStorage.getItem("access_token"),
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.error("getBoardPostPreview", response);
            return [];
        });
};
