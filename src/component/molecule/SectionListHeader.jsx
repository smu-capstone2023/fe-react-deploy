import { IoChevronForwardOutline } from "react-icons/io5";
import styled from "styled-components";

export const SectionListHeader = ({ onClick, title }) => {
    return (
        <SectionListHeaderLayout onClick={onClick} style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "10px", fontFamily: "nexon-regular", fontSize: "1rem" }}>{title}</p>
            <IoChevronForwardOutline size={22} color="#888" />
        </SectionListHeaderLayout>
    );
};

const SectionListHeaderLayout = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.3px solid #5e5e5e;
    align-items: center;
    padding: 0.8rem 1rem;
    width: 100%;
    cursor: pointer;
`;

export default SectionListHeader;
