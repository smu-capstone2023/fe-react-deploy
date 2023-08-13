import { instance } from "api/interceptor";
import axios from "axios";

export const changeMbti = (mbti: string) => {
    return instance
        .put("/auth/edit/mbti", {
            mbti: mbti,
        })
        .then((response: any) => {
            if (response) {
                return true;
            }
        })
        .catch((error: any) => {
            console.error("changeMbti", error);
            return false;
        });
};
