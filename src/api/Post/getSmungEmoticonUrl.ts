import { instance } from "api/interceptor";

export const getSmungEmoticonUrl = (): Promise<string[]> => {
    return instance
        .get(`/upload/emoticon`, {})
        .then((response: any) => {
            return response.data;
        })
        .catch((error: any) => {
            console.error("getSmungEmoticonUrl", error);
            return [];
        });
};
