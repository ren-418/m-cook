import React from 'react';

type Option = {
    label: string;
    value: any;
};

type SwitchProps = {
    left: Option;
    right: Option;
    onChange: (value: any) => void;
};

function Switch({ left, right, onChange }: SwitchProps) {
    const [selectedValue, setSelectedValue] = React.useState(left.value);

    const handleToggle = (value: any) => {
        if (selectedValue !== value) {
            setSelectedValue(value);
            onChange(value);
        }
    };

    return (
        <div className="relative flex items-center cursor-pointer w-full h-[32px] shadow-card rounded-full bg-neutral-white overflow-hidden">
            <div className="flex items-center justify-between w-full h-full">
                <div
                    className="cursor-pointer w-[50%] h-full flex items-center justify-center z-10"
                    onClick={() => handleToggle(left.value)}
                >
                    <span className={`text-label-s select-none text-center w-full transition-transform transform ${selectedValue === left.value ? 'text-neutral-white' : 'text-neutral-800'}`}>
                        {left.label}
                    </span>
                </div>
                
                <div
                    className="cursor-pointer w-[50%] h-full flex items-center justify-center z-10"
                    onClick={() => handleToggle(right.value)}
                >
                    <span className={`text-label-s select-none text-center w-full transition-transform transform ${selectedValue === right.value ? 'text-neutral-white' : 'text-neutral-800'}`}>
                        {right.label}
                    </span>
                </div>

                <div
                    className={`absolute w-[50%] h-full bg-primary-500 rounded-full transition-transform duration-300 transform ${selectedValue === left.value ? 'translate-x-0' : 'translate-x-full'}`}
                />
            </div>
        </div>
    );
}

export default Switch;
