import { instance } from "api/interceptor";

/**
 * @param post_id: number
 * @param content: string
 * @return boolean
 */

export const addComment = (type: "사진" | "글", post_id: number | string, content: string): Promise<boolean> => {
    return instance
        .post(`/comment/create/`, {
            type: type,
            post_id: post_id,
            content: content,
        })
        .then((response: any) => {
            if (response.data.status_code === 201) {
                return true;
            } else {
                return false;
            }
        })
        .catch((response: any) => {
            console.error("addComment", response);
            return false;
        });
};
