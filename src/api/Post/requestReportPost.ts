import { instance } from "api/interceptor";

export const requestReportPost = (post_id: string | number): Promise<number> => {
    return instance
        .put(`/board/report/${post_id}`)
        .then((response: any) => {
            return response.status_code;
        })
        .catch((error: any) => {
            console.error("requestReportPost", error);
            return -1;
        });
};
