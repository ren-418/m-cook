import React, { useRef, useState } from "react";

interface CarrouselProps {
  children: React.ReactNode;
  title: string;
}

const Carrousel: React.FC<CarrouselProps> = ({ children, title }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDragging = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1; // Ajusta este factor para cambiar la velocidad del desplazamiento
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="flex flex-col w-full">
      <h4 className="text-neutral-800 mb-[10px] ml-[16px] select-none">{title}</h4>
      <div
        ref={carouselRef}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDragging}
        className="flex w-full scrollbar-hide overflow-scroll space-x-4 px-[16px] snap-x snap-mandatory py-[2px] h-auto items-center justify-start cursor-grab active:cursor-grabbing"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;

