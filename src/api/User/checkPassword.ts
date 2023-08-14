import { instance } from "api/interceptor";

export const checkPassword = (school_id: string, password: string) => {
    return instance
        .post(`/auth/check_password`, {
            school_id: school_id,
            password: password,
        })
        .then((response: any) => {
            return response.data;
        })
        .catch((error: any) => {
            console.error("checkPassword", error);
            return false;
        });
};
