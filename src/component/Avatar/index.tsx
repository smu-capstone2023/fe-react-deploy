import { ReactElement } from "react";
import { AvatarProps } from "./index.d";
import DefaultProfile from "../Avatar/DefaultProfile.svg";

export default function Avatar(props: AvatarProps): ReactElement {
    const { src = DefaultProfile, size, onClick } = props;

    return (
        <img
            src={src}
            onClick={onClick}
            style={{
                width: `${size}px`,
                background: "#E9E9E9",
                borderRadius: "50%",
            }}
        />
    );
}
