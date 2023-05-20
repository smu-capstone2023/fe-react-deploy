import axios from "axios";

/**
 *
 * @param {*} board_id
 * @returns major_id, major_name, board_id, board_name, is_can_anonymous, is_notice
 */
export const getBoardDetailInfo = (board_id) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/info/${board_id}`, {
            headers: {
                Authorization: localStorage.getItem("access_token"),
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
