import { instance } from "api/interceptor";
import { IPreview } from "pages/Home";

export const getLostBoardPreviewList = (): Promise<IPreview[]> => {
    return instance
        .get(`/board/lost`)
        .then((response: any) => {
            return response.data;
        })
        .catch((response: any) => {
            console.error("getLostBoardPreviewList", response);
            return [];
        });
};
