import axios from "axios"

export const getBoardDetailPostList = (board_id, sorting) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/post_list/${board_id}`,
        {
            headers: {
                Authorization: localStorage.getItem('access_token'),
                sorting : sorting,
            },
        })
        .then((response) => {
            return response.data.posts;
        })
        .catch((response) => {
            console.log(response);
            return [];
        })
};