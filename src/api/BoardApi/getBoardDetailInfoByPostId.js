import axios from "axios"

export const getBoardDetailInfoByPostId = (post_id) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/info_by_postid/${post_id}`, {
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
}