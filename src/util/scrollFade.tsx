import React, { useEffect, useState } from "react";

export default function ScrollFade({ id, children }: { id: string; children: React.ReactNode }) {
    const [opacity, setOpacity] = useState<number>(1);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(id);
            if (element) {
                const rect = element.getBoundingClientRect();
                const fadeStart = 0;
                const fadeEnd = -400;
                const fadeStartBottom = window.innerHeight;
                const fadeEndBottom = window.innerHeight + 250; // diminuído para fade mais rápido

                const progressTop = Math.min(Math.max((rect.top - fadeEnd) / (fadeStart - fadeEnd), 0), 1);
                const progressBottom = Math.min(Math.max((fadeEndBottom - rect.bottom) / (fadeEndBottom - fadeStartBottom), 0), 1);

                setOpacity(Math.min(progressTop, progressBottom));
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [id]);

    return (
        <div aria-hidden="true" style={{ opacity }}>
            {children}
        </div>
    );
}
