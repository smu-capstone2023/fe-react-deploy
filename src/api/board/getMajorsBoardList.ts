import { instance } from "api/interceptor";
import { IBoard } from "pages/Board/type";

export const getMajorsBoardList = (major_id: string | number): Promise<IBoard[]> => {
    return instance
        .get(`/board/board_list/${major_id}`)
        .then((response: any) => {
            return response.data;
        })
        .catch((response: any) => {
            return [];
        });
};
