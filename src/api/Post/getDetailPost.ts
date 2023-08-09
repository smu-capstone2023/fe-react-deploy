import axios from "axios";
import { IPost } from "pages/ViewPost/types";

export const getDetailPost = (post_id: number | string): Promise<IPost | null> => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/detail/${post_id}`, {
            headers: {
                Authorization: localStorage.getItem("access_token"),
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.error("getDetailPost", response);
            return null;
        });
};
