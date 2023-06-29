import styled from "styled-components";

export const LostPreviewElement = ({ onClick, content }) => {
    return (
        <>
            <LPELayout onClick={onClick}>
                <p
                    style={{
                        fontFamily: "nexon-bold",
                        fontSize: "1rem",
                        color: "#4169E1",
                    }}
                >
                    NEW!
                </p>
                <p
                    style={{
                        fontFamily: "nexon-regular",
                        fontSize: "0.8rem",
                        color: "#3E3E3E",
                    }}
                >
                    {content}
                </p>
            </LPELayout>
        </>
    );
};

const LPELayout = styled.div`
    display: flex;
    flex-direction: column;
    background: #ebf0ff;
    width: 100%;
    padding: 0.5rem 1rem;
    border-width: 1px;
    border-radius: 8px;
    color: #3e3e3e;
    cursor: pointer;
`;
export default LostPreviewElement;
