import axios from "axios";
/**
 *
 * @returns postList: {post_id, title, comments, created_time}[]
 */
export const getHotBoardPreviewList = () => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/hot`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.error("getHotBoardPreviewList", response);
            return [];
        });
};
