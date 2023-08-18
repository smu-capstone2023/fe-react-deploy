import { instance } from "api/interceptor";
import { BusNoticeType } from "pages/Home";

export const getBusNotice = () : Promise<boolean | BusNoticeType[]> => {
    return instance
        .get(`/board/bus_notice`)
        .then((response: any) => {
            return response.data;
        })
        .catch((error: any) => {
            console.error("getBusNotice", error);
            return false;
        });
};