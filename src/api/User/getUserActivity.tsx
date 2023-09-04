import { instance } from "api/interceptor";
import { ActivityDto } from "dto/user";

export const getUserActivity = (): Promise<ActivityDto> => {
    return instance
        .get('/auth/my_activity')
        .then((response: any) => {  
            return response.data;
        })
        .catch((response: any)=>{
            console.error("getUserActivity", response);
            return null
        });
};