import { instance } from "api/interceptor";
import { IPreview } from "pages/Home";

export const getBoardPostPreview = (board_id: number | string, limit_post_num: number): Promise<IPreview[]> => {
    return instance
        .get(`/board/preview?board_id=${board_id}&limit_post_num=${limit_post_num}`)
        .then((response: any) => {
            return response.data;
        })
        .catch((response: any) => {
            console.error("getBoardPostPreview", response);
            return [];
        });
};
