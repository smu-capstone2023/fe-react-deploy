import { instance } from "api/interceptor";
import axios from "axios";

export const deletePost = (post_id: string | number) => {
    return instance
        .delete(`/board/delete/${post_id}`, {})
        .then((response: any) => {
            if (response.data.status_code === 201) {
                return true;
            } else return false;
        })
        .catch((error: any) => {
            console.error("deletePost", error);
            return false;
        });
};
