"use client";

import styles from "./boasVindas.module.css"
import { useEffect, useState } from "react";

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

    const [isBoasVindasVisible, setIsBoasVindasVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBoasVindasVisible(false);
        }, 3500); // Tempo em milissegundos antes de ocultar a mensagem

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isBoasVindasVisible 
            ? <div onClick={() => setIsBoasVindasVisible(false)} className={styles.boasVindas + " " + styles.fadeOut}>
                <h1 className={styles.texto} >
                    {textApperAnimation(parteUm)}
                    {textApperAnimation(parteDois, true)}
                </h1>
            </div> : null}
            <div className={styles.childrenContainer}>
                {children}
            </div>
        </>
    );
}