import { instance } from "api/interceptor";

export const reportComment = (commentId: number | string): Promise<number> => {
    return instance
        .put(`/comment/report/${commentId}`, {})
        .then((response: any) => {
            return response.data.status_code;
        })
        .catch((error: any) => {
            console.error("reportComment", error);
            return error.response.status;
        });
};
