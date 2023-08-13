import { instance } from "api/interceptor";
import axios from "axios";

export const changeScrapPost = (post_id: string | number) => {
    return instance
        .put(`/board/scrap/${post_id}`)
        .then((response: any) => {
            return true;
        })
        .catch((response: any) => {
            console.log(response);
            return false;
        });
};
