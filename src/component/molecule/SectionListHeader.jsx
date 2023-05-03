import { IoChevronForwardOutline } from "react-icons/io5";
import styled from 'styled-components';

export const SectionListHeader = ({ onClick, title }) => {
    
  return (
    <SectionListHeaderLayout onClick={onClick} style={{ display: "flex", alignItems: "center" }}>
      <h2 style={{ marginRight: "10px" }}>{title}</h2>
      <IoChevronForwardOutline size={20} color="#888" />
    </SectionListHeaderLayout>
  );
};


const SectionListHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  width: 100%;
  height: 48px;
`;



export default SectionListHeader;