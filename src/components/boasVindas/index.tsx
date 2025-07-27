import styles from "./boasVindas.module.css"

export default function BoasVindas({ children }: { children: React.ReactNode }) {

    const parteUm = "Olá! Eu sou o ";
    const parteDois = "João Raenke!";

    function textApperAnimation(text: string, bold = false) {
        return text.split("").map((char, index) => (
            <span
                key={index}
                className={
                    styles.texto +
                    " " +
                    styles.animatedText + " " +
                    (bold ? styles.highlight : "")
                }
                style={char === " " ? { display: "inline-block", width: "0.25em" } : {}}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    }

    return (
        <>
            <div className={styles.boasVindas + " " + styles.fadeOut}>
                <h1 className={styles.texto} >
                    {textApperAnimation(parteUm)}
                    {textApperAnimation(parteDois, true)}
                </h1>
            </div>
            <div className={styles.childrenContainer}>
                {children}
            </div>
        </>
    );
}