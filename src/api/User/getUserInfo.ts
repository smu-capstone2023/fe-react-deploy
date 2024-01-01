import { instance } from "api/interceptor";
import { UserDto } from "dto/user";

export const getUserInfo = (): Promise<UserDto> => {
    return instance
        .get(`/api/user`, {})
        .then((response: any) => {
            return response.data;
        })
        .catch((response: any) => {
            console.error("getUserInfo", response);
            return null;
        });
};
