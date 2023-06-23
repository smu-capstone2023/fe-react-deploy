/**
 * @param title: {string}
 * @param onClick: () => {}
 * @param width: number | string
 * @param height: number | string
 * @returns
 */

export const Button = ({ title, onClick, width = "100%", height = "3rem", fontSize = "1em" }) => {
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
                        height: height,
                        width: "100%",
                        borderRadius: "6px",
                        fontSize: fontSize,
                    }}
                >
                    {title}
                </button>
            </div>
        </>
    );
};

export default Button;
