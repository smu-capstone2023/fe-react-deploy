import { instance } from "api/interceptor";

export const getUserMajorsInfo = () => {
    return instance
        .get(`/auth/usermajors`, {})
        .then((response: any) => {
            if (response.data.status_code === 200) {
                return response.data;
            }
        })
        .catch((response: any) => {
            console.log(response);
            return [];
        });
};
