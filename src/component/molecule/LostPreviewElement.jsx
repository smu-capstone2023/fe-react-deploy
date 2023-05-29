import styled from "styled-components";

export const LostPreviewElement = ({onClick, content}) => {

    return (
        <>
            <LPELayout onClick={onClick}>
                <h5 style={{
                    fontFamily: 'nexon-bold',
                    fontSize: '18px',
                    color: '#4169E1',
                }}>NEW!</h5>
                <p style={{
                    fontFamily: 'nexon-regular',
                    fontSize: '16px',
                    color: '#3E3E3E',
                }}>{content}</p>
            </LPELayout>
        </>
    )
};

const LPELayout = styled.div`
    display: flex;
    flex-direction: column;
    background: #EBF0FF;
    width: 100%;
    padding: 1rem;
    border-width: 1px;
    border-radius: 0.8rem;
    color: #3E3E3E;
    cursor: pointer;

    @media screen and (max-width: 380px) {
        padding: .6rem;
      }
`
export default LostPreviewElement;