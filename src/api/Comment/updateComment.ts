import { instance } from "api/interceptor";

export const updateComment = (commentId: number | string): Promise<boolean> => {
    return instance
        .patch(`/comment/update/${commentId}`, {})
        .then((response: any) => {
            if (response.data.status_code === 201) {
                return true;
            } else return false;
        })
        .catch((error: any) => {
            console.error("updateComment", error);
            return false;
        });
};
