import { instance } from "api/interceptor";


export const likePost = (postId: number | string): Promise<boolean | null> => {
    return instance
        .post(`/board/like/`, {
            post_id: postId,
        })
        .then((response: any) => {
            if (response.data.status_code === 201) {
                return true;
            } else return false;
        })
        .catch((error: any) => {
            console.error("likePost", error);
            return null;
        });
};
