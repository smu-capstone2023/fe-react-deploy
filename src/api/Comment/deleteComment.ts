import { instance } from "api/interceptor";

export const deleteComment = (commentId: number | string): Promise<boolean> => {
    return instance
        .delete(`/comment/delete/${commentId}`, {})
        .then((response: any) => {
            if (response.data.status_code === 201) {
                return true;
            } else return false;
        })
        .catch((error: any) => {
            console.error("deleteComment", error);
            return false;
        });
};
