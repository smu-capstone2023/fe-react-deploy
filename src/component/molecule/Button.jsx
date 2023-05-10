/**
 * @param title: {string}
 * @param onClick: () => {}
 * @param width: number | string
 * @returns
 */

export const Button = ({ title, onClick, width = "100%" }) => {
    return (
        <>
            <div style={{ display: "flex", width: width }} onClick={onClick}>
                <button
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        background: "#4169E1",
                        height: "3rem",
                        width: "100%",
                        padding: "1rem 2rem 1rem 2rem",
                        borderRadius: "6px",
                    }}
                >
                    {title}
                </button>
            </div>
        </>
    );
};

export default Button;
