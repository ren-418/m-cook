import React, { useState } from 'react';
import TicIcon from "../../../icons/checkBox/TicIcon";

interface CheckBoxProps {
    onChecked: () => void;
    onNotChecked: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ onChecked = () => {}, onNotChecked = () => {} }) => {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
        if (checked) {
            onNotChecked();
        } else {
            onChecked();
        }
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer p-[2px]"
        >
            {checked? <div
                className="w-[22px] h-[22px] cursor-pointer rounded-[2px] bg-primary-500 flex items-center justify-center"
            >
                <TicIcon/>
            </div>
            : <div className="w-[22px] h-[22px] cursor-pointer rounded-[2px] border-[1px] border-neutral-800"/>
            }
        </div>
    );
};

export default CheckBox;