import { instance } from "api/interceptor";

export const changeNickname = (nickname: string) => {
    return instance
        .put(`/auth/user/nickname`, {
            nickname: nickname,
        })
        .then((response: any) => {
            if (response.data.status_code === 201) {
                return true;
            } else return false;
        })
        .catch((response: any) => {
            console.error("changeNickname", response);
            return false;
        });
};
