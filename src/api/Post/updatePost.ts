import { instance } from "api/interceptor";

export const updatePost = (title: string, content: string, is_anonymous: boolean, image_url_list: string[], post_id: string | number): Promise<boolean> => {
    return instance
        .patch(`/board/update/${post_id}`, {
            title: title,
            content: content,
            is_anonymous: is_anonymous,
            image_url_list: image_url_list,
            post_id: post_id,
        })
        .then((response: any) => {
            return true;
        })
        .catch((error: any) => {
            console.error("updatePost", error);
            return false;
        });
};
