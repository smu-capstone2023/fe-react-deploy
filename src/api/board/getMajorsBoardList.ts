import axios from "axios";
import { IBoard } from "pages/Board/type";

export const getMajorsBoardList = (major_id: string | number): Promise<IBoard[]> => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/board_list/${major_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
            return [];
        });
};
