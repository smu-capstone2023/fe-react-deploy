/**
 * @param title: {string}
 * @param onClick: () => {}
 * @returns
 */

export const Button = ({title, onClick}) => {
    return (
        <>
            <div style={{display: 'flex'}} onClick={onClick}>
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    background: '#4169E1',
                    height: '3rem',
                    padding: '1rem 2rem 1rem 2rem',
                    borderRadius: '6px',
                }}>{title}</button>
            </div>
        </>
    )
};

export default Button;

