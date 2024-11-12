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
        <div className='fixed inset-0 flex justify-center items-end w-full'>
            <div className="bg-neutral-800 bg-opacity-20 fixed inset-0 " onClick={onClose}></div>
            <div className="bg-neutral-white opacity-100 relative rounded-t-[20px] pb-[50px] flex flex-col items-start w-full min-h-[60%]">
                <div
                    ref={bottomSheetRef}
                    className={`flex flex-col items-center p-[10px_16px] gap-5 w-[390px] bottom-0 transition-all duration-500 opacity-100 rounded-t-[16px]`}
                >

                    <div className="flex flex-col items-center w-full opacity-100 py-[10px] z-10">
                        <DragHandle onClick={onClose} />
                    </div>


                    <div className="flex flex-col items-start w-full h-fit opacity-100 mb-[20px]">
                        <h4 className="text-neutral-800 font-semibold text-left opacity-100 mb-[10px]">Order By</h4>
                        <OrderByItem criteria="Quality" index={0} onClick={() => {}} />
                        <OrderByItem criteria="Price" index={1} onClick={() => {}} />
                        <OrderByItem criteria="Location" index={2} onClick={() => {}} />
                    </div>

                    <div className="flex flex-col items-start w-full h-fit opacity-100">
                        <h4 className="text-neutral-800 font-semibold text-left opacity-100 mb-[20px]">Filter By</h4>
                        <div className="grid grid-cols-3 gap-4 w-[358px] h-[96px]">
                            <CheckBoxItem title="Keto" />
                            <CheckBoxItem title="Vegan" />
                            <CheckBoxItem title="Sweet" />
                            <CheckBoxItem title="Vegetarian" />
                            <CheckBoxItem title="Low Fat" />
                            <CheckBoxItem title="Savory" />
                            <CheckBoxItem title="Gluten Free" />
                            <CheckBoxItem title="Spicy" />
                            <CheckBoxItem title="Organic" />
                        </div>
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
