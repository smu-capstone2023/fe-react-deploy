import React from "react";
import ModalImage from "react-modal-image";
import styled from "styled-components";

const ViewImageList = ({ imageUrlList, size }) => {
    return (
        <div style={{ display: "flex", gap: 10 }}>
            {imageUrlList &&
                imageUrlList.map((imageUrl) => (
                    <div key={imageUrl} style={{ height: size, width: size, overflow: "clip" }}>
                        <ModalImage small={imageUrl} large={imageUrl} hideDownload hideZoom style={{ display: "inline-block" }} />
                    </div>
                ))}
        </div>
    );
};

export default ViewImageList;
