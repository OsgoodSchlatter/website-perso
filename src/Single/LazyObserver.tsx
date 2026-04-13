import { useEffect, useRef, useState } from "react";

export function LazyImage({ src, alt, onClick }: { src: string; alt: string; onClick?: () => void }) {
    const ref = useRef<HTMLImageElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref}>
            {isVisible && (
                <img
                    src={src}
                    alt={alt}
                    className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mt-2 cursor-pointer"
                    onClick={onClick}
                />
            )}
        </div>
    );
}