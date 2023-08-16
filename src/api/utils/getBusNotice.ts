import { instance } from "api/interceptor";

export const getBusNotice = () => {
    return instance
        .get(`/board/bus_notice`, {})
        .then((response: any) => {
            return response.data;
        })
        .catch((error: any) => {
            console.error("getBusNotice", error);
            return false;
        });
};