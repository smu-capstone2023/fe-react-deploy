import { instance } from "api/interceptor";
import axios from "axios";
import { IPreview } from "pages/Home";

export const getHotBoardPreviewList = (): Promise<IPreview[]> => {
    return instance
        .get(`/board/hot`)
        .then((response: any) => {
            return response.data;
        })
        .catch((error: any) => {
            console.error("getHotBoardPreviewList", error);
            return [];
        });
};
