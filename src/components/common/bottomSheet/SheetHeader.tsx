import React, { useState } from 'react';

const SheetHeader: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSheet = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="flex flex-col items-center p-4 gap-3 absolute top-0 left-0 right-0 z-10">
                <DragHandle onClick={toggleSheet} />
            </div>

            {isOpen && (
                <div className="absolute top-[36px] w-full h-[400px] bg-white z-20 transition-all ease-in-out duration-500">
                    <p>Este es el contenido del BottomSheet que se abre al hacer clic en el DragHandle.</p>
                </div>
            )}
        </div>
    );
};


const DragHandle: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="4" rx="2" fill="#AEB3B8" />
            </svg>
        </div>
    );
};

export default SheetHeader;
