import React from "react";
import ModalImage from "react-modal-image";

const ViewImageList = ({ imageUrlList, size }) => {
    return (
        <div style={{ display: "flex", gap: 10 }}>
            {imageUrlList &&
                imageUrlList.map((imageUrl) => (
                    <div style={{ width: size, height: size }}>
                        <ModalImage small={imageUrl} large={imageUrl} hideDownload hideZoom height={20} />
                    </div>
                ))}
        </div>
    );
};

export default ViewImageList;
