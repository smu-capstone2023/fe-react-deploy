import { instance } from "api/interceptor";

export const createPost = (title: string, content: string, board_id: string | number, is_anonymous: boolean, image_url_list: string[]) => {
    return instance
        .post(`/board/create`, {
            title: title,
            content: content,
            board_id: board_id,
            is_anonymous: is_anonymous,
            image_url_list: image_url_list,
        })
        .then((response: any) => {
            if (response.data.status_code === 201) {
                return response.data.post_id;
            }
            return false;
        })
        .catch((error: any) => {
            console.error("createPost", error);
            return false;
        });
};
