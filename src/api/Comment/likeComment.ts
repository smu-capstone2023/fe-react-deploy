import { instance } from "api/interceptor";

export const likeComment = (commentId: number): Promise<boolean | null> => {
    return instance
        .put(`/comment/like`, {
            comment_id: `${commentId}`,
        })
        .then((response: any) => {
            if (response.data.status_code === 201) {
                return true;
            } else {
                return false;
            }
        })
        .catch((response: any) => {
            console.error("likeComment", response);
            return null;
        });
};
