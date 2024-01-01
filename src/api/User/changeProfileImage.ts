import { instance } from "api/interceptor";

export const changeProfileImage = (image: string): Promise<boolean> => {
    return instance
        .put(`/api/user/profile_image`, {
            image: image,
        })
        .then((response: any) => {
            if (response.data.status_code) return true;
            else {
                return false;
            }
        })
        .catch((response: any) => {
            return false;
        });
};
