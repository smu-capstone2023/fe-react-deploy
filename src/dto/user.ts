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
