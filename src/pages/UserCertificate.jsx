import React from "react";
import UserCertificateView from "../component/template/UserCertificateView";

const UserCertificate = () => {
    const onClickCompleteButton = () => {
        window.location.href = "/login";
    };
    return <UserCertificateView onClickCompleteButton={onClickCompleteButton} />;
};

export default UserCertificate;
