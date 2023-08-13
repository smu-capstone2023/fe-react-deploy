import { instance } from "api/interceptor";

export const getBoardPostSearchCursor = (keyword: string, last_id: string | number, per_page: string | number) => {
    return instance
        .get(`/board/search_cursor?keyword=${keyword}&last_id=${last_id}&per_page=${per_page}`, {})
        .then((response: any) => {
            return response.data;
        })
        .catch((response: any) => {
            console.log(response);
            return {};
        });
};
