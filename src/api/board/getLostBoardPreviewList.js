import axios from "axios";
/**
 *
 * @returns postList: {post_id, title, comments, created_time}[]
 */
export const getLostBoardPreviewList = () => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/lost`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.error("getLostBoardPreviewList", response);
            return [];
        });
};
