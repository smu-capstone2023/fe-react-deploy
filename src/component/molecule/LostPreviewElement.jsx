export const LostPreviewElement = ({onClick, content}) => {

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#EBF0FF',
                width: '100%',
                padding: '1rem',
                borderWidth: '1px',
                borderRadius: '0.8rem',
                color: '#3E3E3E',
            }} onClick={onClick}>
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
            </div>
        </>
    )
};

export default LostPreviewElement;