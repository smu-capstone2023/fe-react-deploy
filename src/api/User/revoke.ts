import { instance } from "api/interceptor";
import axios from "axios";

export const revoke = () => {
    return instance
        .delete(`/auth/revoke`, {})
        .then((response: any) => {
            if (response.status === 201) {
                return true;
            }
        })
        .catch((response: any) => {
            console.log(response);
            return false;
        });
};
