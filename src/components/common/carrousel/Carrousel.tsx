import React, { useRef } from "react";

interface CarrouselProps {
    children: React.ReactNode;
    title: string;
}

const Carrousel: React.FC<CarrouselProps> = ({ children, title }) => {
    const carrouselRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex flex-col w-full">
            <h4 className="text-neutral-800 mb-[10px] ml-[16px]">{title}</h4>
            <div 
                ref={carrouselRef} 
                className="flex w-full scrollbar-hide overflow-scroll space-x-4 pl-[16px] snap-x snap-mandatory py-[2px] h-auto items-center justify-start" 
                style={{
                    clipPath: "inset(0 -10px 0 0)"
                }}
            >
                {React.Children.map(children, (child, index) => (
                    <div key={index}>{child}</div>
                ))}
            </div>
        </div>
    );
};

export default Carrousel;
