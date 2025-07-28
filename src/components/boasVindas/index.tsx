"use client";

import styles from "./boasVindas.module.css"
import { useEffect } from "react";

export default function BoasVindas(
    { 
        children, 
        isBoasVindasVisible, 
        setIsBoasVindasVisible 
    }: { 
        children: React.ReactNode, 
        isBoasVindasVisible: boolean, 
        setIsBoasVindasVisible: (visible: boolean) => void 
    }) {

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBoasVindasVisible(false);
        }, 3500);

        if (isBoasVindasVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }

        return () => clearTimeout(timer);
    }, [isBoasVindasVisible, setIsBoasVindasVisible]);

    return (
        <>
            {isBoasVindasVisible 
            ? <div onClick={() => setIsBoasVindasVisible(false)} className={styles.boasVindas + " " + styles.fadeOut}>
                <h1 className={styles.texto} >
                    {textApperAnimation("Olá! Eu sou o ")}
                    {textApperAnimation("João Vitor Raenke!", true)}
                </h1>
            </div> : null}
            <div className={styles.childrenContainer}>
                {children}
            </div>
        </>
    );
}