import React, { useEffect, useState } from "react";

export default function ScrollFade({ id, children }: { id: string; children: React.ReactNode }) {
    const [opacity, setOpacity] = useState<number>(1);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(id);
            if (element) {
                const rect = element.getBoundingClientRect();
                const fadeStart = 0;      // px do topo do viewport
                const fadeEnd = -400;     // px acima do topo do viewport
                const fadeStartBottom = window.innerHeight; // px do fundo do viewport
                const fadeEndBottom = window.innerHeight + 400; // px abaixo do fundo do viewport

                // Fade topo
                const progressTop = Math.min(Math.max((rect.top - fadeEnd) / (fadeStart - fadeEnd), 0), 1);
                // Fade fundo
                const progressBottom = Math.min(Math.max((fadeEndBottom - rect.bottom) / (fadeEndBottom - fadeStartBottom), 0), 1);

                // Opacidade mínima entre os dois fades
                setOpacity(Math.min(progressTop, progressBottom));
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call

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