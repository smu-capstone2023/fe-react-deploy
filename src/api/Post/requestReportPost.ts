import { instance } from "api/interceptor";

export const requestReportPost = (post_id: string | number) => {
    return instance
        .put(`/board/report/${post_id}`)
        .then((response: any) => {
            return true;
        })
        .catch((error: any) => {
            console.error("requestReportPost", error);
            return false;
        });
};
