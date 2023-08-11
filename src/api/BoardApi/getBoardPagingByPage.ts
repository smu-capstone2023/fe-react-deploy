import axios from "axios";
import { IBoardPagingResponse } from "pages/Board/type";

export const getBoardPagingByPage = (
    board_id: number | string,
    now_page: number,
    per_page: number,
    keyword: string,
    sorting: string
): Promise<IBoardPagingResponse> => {
    return axios
        .get(
            `${process.env.REACT_APP_SERVER_URL}/board/paging?board_id=${board_id}&now_page=${now_page}&per_page=${per_page}&keyword=${keyword}`,
            {
                headers: {
                    Authorization: localStorage.getItem("access_token"),
                    sorting: sorting,
                },
            }
        )
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
            return {};
        });
};
