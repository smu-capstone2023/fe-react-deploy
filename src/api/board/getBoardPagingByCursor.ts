import axios from "axios";

export const getBoardPagingByCursor = (
    board_id: number | string,
    last_id: number | string,
    per_page: number | string,
    keyword: string,
    sorting: string
) => {
    return axios
        .get(
            `${process.env.REACT_APP_SERVER_URL}board/cursor?board_id=${board_id}&last_id=${last_id}&per_page=${per_page}&keyword=${keyword}`,
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
