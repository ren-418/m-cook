import React, { useState } from 'react';
import TicIcon from "../../../icons/checkBox/TicIcon";

const CheckBox: React.FC = () => {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer"
        >
            {checked ? (
                <div className="w-[22px] h-[22px] cursor-pointer rounded-[2px] bg-primary-500 flex items-center justify-center">
                    <TicIcon />
                </div>
            ) : (
                <div className="w-[22px] h-[22px] cursor-pointer rounded-[2px] border-[1px] border-neutral-800" />
            )}
        </div>
    );
};

export default CheckBox;