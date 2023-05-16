import { IoChevronForwardOutline } from "react-icons/io5";
import styled from 'styled-components';

export const SectionListHeader = ({ onClick, title }) => {
    
  return (
    <SectionListHeaderLayout onClick={onClick} style={{ display: "flex", alignItems: "center" }}>
      <h2 style={{ marginRight: "10px", fontFamily: 'nexon-regular' }}>{title}</h2>
      <IoChevronForwardOutline size={22} color="#888" />
    </SectionListHeaderLayout>
  );
};

const SectionListHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3px solid #5E5E5E;
  align-items: center;
  padding: 1em;
  width: 100%;
  height: 48px;
  cursor: pointer;
`;



export default SectionListHeader;