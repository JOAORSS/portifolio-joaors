"use client";

import { useEffect, useState } from "react";

export default function ScrollFade({ children }: { children: React.ReactNode }) {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div aria-hidden="true" style={{ opacity: 1 - scrollY / 400 }}>
            {children}
        </div>
    );
}