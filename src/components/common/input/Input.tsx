import React, { InputHTMLAttributes, useState, FC } from 'react';
import Email from '../../../icons/input/Email';
import { cva } from 'class-variance-authority';
import Eye from '../../../icons/input/Eye';
import User from '../../../icons/input/User';
import Location from '../../../icons/input/Location';

type VariantsType = 'email' | 'name' | 'location';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    options?: string[];
    label: string;
    variant?: VariantsType;
}

interface IconProps {
    className?: string;
}

type IconsMap = {
    [key in VariantsType]: FC<IconProps>;
};

const variantMap: IconsMap = {
    email: Email,
    name: User,
    location: Location,
} as const;

const inputStyles = cva(
    'rounded-[8px] border-2 border-solid h-[50px] pl-[16px] pr-[40px] w-full min-w-[300px] bg-transparent', 
    {
        variants: {
            focus: { true: 'border-primary-500 outline-primary-500' },
            disabled: { true: 'border-neutral-300' },
            default: { true: 'border-neutral-600' },
        },
        defaultVariants: {
            focus: false,
            disabled: false,
        },
    }
);

const labelStyles = cva(
    'absolute top-0 transform -translate-y-1/2 left-3 bg-neutral-white px-1 text-center truncate max-w-[90%]', 
    {
        variants: {
            focus: { true: 'text-primary-500' },
            disabled: { true: 'text-neutral-300' },
            default: { true: 'text-neutral-600' },
        },
        defaultVariants: {
            focus: false,
            disabled: false,
        },
    }
);

const iconStyles = cva('', {
    variants: {
        focus: { true: 'text-primary-500' },
        disabled: { true: 'text-neutral-300' },
        default: { true: 'text-neutral-600' },
    },
    defaultVariants: {
        focus: false,
        disabled: false,
    },
});

function Input({ width, variant, label, disabled, type, ...props }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const IconComponent = type === 'password'  ? Eye : variantMap[variant as keyof IconsMap];

    return (
        <div className='relative w-fit h-fit'>
            <span className={labelStyles({ focus: isFocused, disabled, default: !isFocused && !disabled })}>
                {label}
            </span>
            <input
                className={inputStyles({ focus: isFocused, disabled, default: !isFocused && !disabled })}
                style={{ width: width || 'auto' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type={type}
                disabled={disabled}
                {...props}
            />
            {(variant || type === 'password') && (
                <span className='absolute right-[8px] top-1/2 transform -translate-y-1/2'>
                    <IconComponent className={iconStyles({ focus: isFocused, disabled, default: !isFocused && !disabled })} />
                </span>
            )}
        </div>
    );
}

export default Input;
