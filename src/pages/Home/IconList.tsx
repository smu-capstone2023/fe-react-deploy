/** @jsxImportSource @emotion/react */
import { useToast } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { MajorDto } from "dto/user";
import {
    IoSchoolOutline,
    IoChatbubbleEllipsesOutline,
    IoCalendarOutline,
    IoCallOutline,
    IoLogoMicrosoft,
    IoMailUnreadOutline,
} from "react-icons/io5";

type IconType = "학교게시판" | "학과게시판" | "학사일정" | "문의하기" | "Office365";

const IconButton = ({ iconName }: { iconName: IconType }): JSX.Element => {
    switch (iconName) {
        case "학교게시판":
            return <IoSchoolOutline size={25} color="#999" />;
        case "학과게시판":
            return <IoChatbubbleEllipsesOutline size={25} color="#999" />;
        case "학사일정":
            return <IoCalendarOutline size={25} color="#999" />;
        case "문의하기":
            return <IoMailUnreadOutline size={25} color="#999" />;
        case "Office365":
            return <IoLogoMicrosoft size={25} color="#999" />;
        default:
            return <></>;
    }
};

interface Prop {
    majors?: MajorDto[];
}

export default function IconList({ majors }: Prop) {
    const icon_list: IconType[] = ["학교게시판", "학과게시판", "학사일정", "문의하기", "Office365"];
    const toast = useToast();

    const handleOnClick = (name: IconType) => {
        switch (name) {
            case "학교게시판":
                if (!majors || majors.length < 1) {
                    alert("로그인이 필요한 기능입니다.");
                } else {
                    const major = majors[0];
                    window.location.href = `/board/${major.major_id}/${major.free_board_id}`;
                }
                break;
            case "학과게시판":
                if (!majors || majors.length < 1) {
                    alert("로그인이 필요한 기능입니다.");
                } else if (majors.length < 2) {
                    alert("학과 인증이 필요한 기능입니다.");
                } else {
                    const major = majors[1];
                    window.location.href = `/board/${major.major_id}/${major.free_board_id}`;
                }
                break;
            case "학사일정":
                window.open("https://www.smu.ac.kr/kor/life/academicCalendar.do");
                break;
            case "문의하기":
                toast({ title: "준비중입니다.", position: "top", isClosable: true, variant: "subtle" });
                break;
            case "Office365":
                window.open("https://cloud.smu.ac.kr/");
                break;
        }
    };
    return (
        <>
            <div
                css={css`
                    padding: 20px 0;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-self: center;
                    width: ${82 * 3 + 20 + "px"};
                    gap: 10px;
                `}
            >
                {icon_list.map((item, index) => {
                    return (
                        <div
                            onClick={() => handleOnClick(item)}
                            key={index}
                            css={css`
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                width: 82px;
                                gap: 8px;
                            `}
                        >
                            <IconButton iconName={item} />
                            <p
                                css={css`
                                    font-family: nexon-regular;
                                    color: #999;
                                    size: 14px;
                                `}
                            >
                                {item}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div
                css={css`
                    border-bottom-width: 10px;
                    border-bottom-style: solid;
                    border-bottom-color: #f3f3f3;
                `}
            />
        </>
    );
}
