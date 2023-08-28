export interface MajorDto {
    major_id: number;
    major_name: string;
    free_board_id: number;
}
export interface UserDto {
    username: string;
    school_id: string;
    profile_img_url: null | string;
    mbti: null | string;
    majors: MajorDto[];
}
export interface ActivityDto {
    writed_post: [{
        id: number,
        board_id: number,
        user_id: number,
        title: string,
        content: string,
        img_urls: string,
        views: number,
        likes: number,
        unlikes: number,
        scraps: number,
        reports: number,
        is_anonymous: boolean,
        createdAt: string,
        updatedAt: string,
        deletedAt: string | null,
        number_of_comments: number,
    }];
    liked_post: [{
        id: number,
        board_id: number,
        user_id: number,
        title: string,
        content: string,
        img_urls: string,
        views: number,
        likes: number,
        unlikes: number,
        scraps: number,
        reports: number,
        is_anonymous: boolean,
        createdAt: string,
        updatedAt: string,
        deletedAt: string | null,
        number_of_comments: number,
    }];
}
