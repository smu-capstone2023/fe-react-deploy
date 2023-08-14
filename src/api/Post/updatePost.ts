import { instance } from "api/interceptor";

export const updatePost = (title: string, content: string, post_id: number, is_anonymous: boolean, image_url_list: string[]) => {
    return instance
        .patch(`/board/update/${post_id}`, {
            title: title,
            content: content,
            is_anonymous: is_anonymous,
            image_url_list: image_url_list,
        })
        .then((response: any) => {
            return true;
        })
        .catch((error: any) => {
            console.error("updatePost", error);
            return false;
        });
};
