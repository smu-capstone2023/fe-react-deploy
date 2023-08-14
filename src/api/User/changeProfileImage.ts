import { instance } from "api/interceptor";

export const changeProfileImage = (image: FormData) => {
    return instance
        .put(`/auth/user/profile_image`, {
            image: image,
        })
        .then((response: any) => {
            if (response.data.status_code) return true;
            else {
                return false;
            }
        })
        .catch((response: any) => {
            console.log(response);
            return false;
        });
};
