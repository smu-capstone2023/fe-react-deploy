import { instance } from "api/interceptor";

export const changeLikePost = (post_id: string | number) => {
    return instance
        .put(`/board/like/${post_id}`)
        .then((response: any) => {
            return true;
        })
        .catch((response: any) => {
            return false;
        });
};
