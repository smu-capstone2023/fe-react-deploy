import { instance } from "api/interceptor";

export const revoke = () => {
    return instance
        .delete(`/auth/revoke`)
        .then((response: any) => {
            if (response.status === 201) {
                return true;
            }
        })
        .catch((response: any) => {
            return false;
        });
};
