import { instance } from "api/interceptor";

export const changePassword = (old_password: string, new_password: string) => {
    return instance
        .put(`/api/user/password`, {
            old_password: old_password,
            new_password: new_password,
        })
        .then((response: any) => {
            if (response.data.status_code === 201) return true;
            else return false;
        })
        .catch((error: any) => {
            console.error("changePassword", error);
            return false;
        });
};
