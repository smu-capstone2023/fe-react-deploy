import { instance } from "api/interceptor";
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
    return instance
        .get(`/board/info_by_postid/${post_id}`)
        .then((response: any) => {
            return response.data;
        })
        .catch((error: any) => {
            console.error("getBoardDetailInfoByPostId", error);
            return {};
        });
};
