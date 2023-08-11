import axios from "axios";

interface IResponse {
    major_id: number;
    major_name: string;
    board_id: number;
    board_name: string;
    is_can_anonymous: boolean;
    is_notice: boolean;
}
export const getBoardDetailInfoByPostId = (post_id: string | number): Promise<IResponse> => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/info_by_postid/${post_id}`, {
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
