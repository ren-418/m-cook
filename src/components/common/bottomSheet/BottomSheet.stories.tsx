import React, { useEffect, useRef } from 'react';
import OrderByItem from "../../orderByItem/OrderByItem";
import CheckBoxItem from "../checkBoxItem/CheckBoxItem";

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose }) => {
    const bottomSheetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                bottomSheetRef.current &&
                !bottomSheetRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div
            className={`fixed inset-0 flex justify-center items-end ${isOpen ? 'visible' : 'invisible'}`}
        >
            <div
                ref={bottomSheetRef}
                className={`flex flex-col items-center p-[10px_16px] gap-5 absolute w-[390px] bottom-0 transition-all duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {isOpen && (
                    <div className="flex flex-col items-center gap-2 w-full absolute top-0" style={{ paddingTop: '16px', paddingBottom: '12px', zIndex: 10 }}>
                        <DragHandle onClick={onClose} />
                    </div>
                )}

                <div className="flex flex-col items-start gap-4 w-[358px] h-[175px]">
                    <h2 className="text-lg font-semibold text-left">Sort By</h2>
                    <OrderByItem criteria="Quality" index={0} onClick={() => {}} />
                    <OrderByItem criteria="Price" index={1} onClick={() => {}} />
                    <OrderByItem criteria="Location" index={2} onClick={() => {}} />
                </div>

                <div className="flex flex-col items-start gap-5 w-[358px] h-[175px]">
                    <h2 className="text-lg font-semibold text-left">Filter By</h2>
                    <div className="grid grid-cols-3 gap-4 w-[358px] h-[96px]">
                        <CheckBoxItem title="Filter" />
                        <CheckBoxItem title="Vegan" />
                        <CheckBoxItem title="Sweet" />
                        <CheckBoxItem title="Vegetarian" />
                        <CheckBoxItem title="Low Calories" />
                        <CheckBoxItem title="Savory" />
                        <CheckBoxItem title="Gluten Free" />
                        <CheckBoxItem title="Spicy" />
                        <CheckBoxItem title="Organic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSheet;

const DragHandle: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <div className="cursor-pointer flex justify-center items-center" onClick={onClick}>
            <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="4" rx="2" fill="#AEB3B8" />
            </svg>
        </div>
    );
};