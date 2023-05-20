import axios from "axios"

export const getMajorsBoardList = (major_id) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/board_list/${major_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
            return [];
        })
}