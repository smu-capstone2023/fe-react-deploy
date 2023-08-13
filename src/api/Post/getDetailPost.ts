import { instance } from "api/interceptor";
import axios from "axios";
import { IPost } from "pages/ViewPost/types";

export const getDetailPost = (post_id: number | string): Promise<IPost | null> => {
    return instance
        .get(`/board/detail/${post_id}`, {})
        .then((response: any) => {
            return response.data;
        })
        .catch((response: any) => {
            console.error("getDetailPost", response);
            return null;
        });
};
