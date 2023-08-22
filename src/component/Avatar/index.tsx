import { ReactElement, useEffect, useState } from "react";
import { AvatarProps } from "./index.d";
import DefaultProfile from "../Avatar/DefaultProfile.svg";

export default function Avatar(props: AvatarProps): ReactElement {
    const { src = DefaultProfile, size, profileUrl } = props;

    return (
        <div
            style={{
                display: "flex",
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: `${size / 2}px`,
                backgroundImage: `url(${profileUrl ? profileUrl : src })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                justifyContent: "end",
                alignItems: "flex-end",
            }}
        >
        </div>
    );
}
