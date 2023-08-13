import { instance } from "api/interceptor";
import axios from "axios";

export const getBoardDetailInfo = (board_id: string | number) => {
    return instance
        .get(`${process.env.REACT_APP_SERVER_URL}/board/info/${board_id}`)
        .then((response: any) => {
            return response.data;
        })
        .catch((response: any) => {
            console.log(response);
            return {};
        });
};
