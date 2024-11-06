import React, { useRef, useEffect } from "react";

interface CarrouselProps {
    children: React.ReactNode;
    title: string;
    width: string;
}

const Carrousel: React.FC<CarrouselProps> = ({ children, title, width = "100%" }) => {
    const carrouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carrousel = carrouselRef.current;
        if (carrousel) {
            const handleScroll = () => {
                if (carrousel.scrollLeft === 0) {
                    carrousel.scrollLeft = carrousel.scrollWidth / 2;
                } else if (carrousel.scrollLeft >= carrousel.scrollWidth - carrousel.clientWidth) {
                    carrousel.scrollLeft = carrousel.scrollWidth / 2 - carrousel.clientWidth;
                }
            };
            carrousel.addEventListener("scroll", handleScroll);
            carrousel.scrollLeft = carrousel.scrollWidth / 2;
            return () => carrousel.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const clonedChildren = React.Children.toArray(children).concat(React.Children.toArray(children));

    return (
        <div className="flex flex-col" style={{ width }}>
            <h2 className="text-[24px] text-neutral-black text-h4 mb-2.5 ml-2.5">{title}</h2>
            <div ref={carrouselRef} className="flex w-full overflow-x-auto scrollbar-hide space-x-4 px-[4px] snap-x snap-mandatory py-[2px] h-auto items-center justify-start">
                {clonedChildren.map((child, index) => (
                    <div key={index} className="snap-start">{child}</div>
                ))}
            </div>
        </div>
    );
};

export default Carrousel;