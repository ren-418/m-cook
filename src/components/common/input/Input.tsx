import React, { InputHTMLAttributes, useState, FC, useEffect, useRef } from 'react';
import Email from '../../../icons/input/Email';
import { cva } from 'class-variance-authority';
import Eye from '../../../icons/input/Eye';
import User from '../../../icons/input/User';
import Location from '../../../icons/input/Location';
import DownArrow from '../../../icons/input/DownArrow';
import UpArrow from '../../../icons/input/UpArrow';
import Error from '../../../icons/input/Error';

type IconType = 'email' | 'name' | 'location';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    options?: string[];
    label: string;
    icon?: IconType;
    error?: string;
}

interface IconProps {
    className?: string;
}

type IconsMap = {
    [key in IconType]: FC<IconProps>;
};

const variantMap: IconsMap = {
    email: Email,
    name: User,
    location: Location,
} as const;

const inputStyles = cva(
    'rounded-[8px] text-body border-2 border-solid h-[50px] pl-[16px] pr-[40px] w-full min-w-[300px] bg-transparent', 
    {
        variants: {
            error: { true: 'border-negative-500 focus:outline-none' },
            focus: { true: 'border-primary-500 outline-primary-500' },
            disabled: { true: 'border-neutral-300' },
            default: { true: 'border-neutral-600' },
        },
        defaultVariants: {
            focus: false,
            disabled: false,
            error: false,
        },
    }
);

const labelStyles = cva(
    'absolute top-0 text-label-s transform -translate-y-1/2 left-3 bg-neutral-white px-1 text-center truncate max-w-[90%] z-10', 
    {
        variants: {
            focus: { true: 'text-primary-500' },
            disabled: { true: 'text-neutral-300' },
            error: { true: 'text-negative-500' },
            default: { true: 'text-neutral-600' },
        },
        defaultVariants: {
            focus: false,
            disabled: false,
            error: false,
        },
    }
);

const iconStyles = cva('', {
    variants: {
        focus: { true: 'text-primary-500' },
        disabled: { true: 'text-neutral-300' },
        error: { true: 'text-negative-500' },
        default: { true: 'text-neutral-600' },
    },
    defaultVariants: {
        focus: false,
        disabled: false,
        error: false,
    },
});

function Input({ width, icon, label, disabled = false, type, error, options, ...props }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleFocus = () => setIsFocused(true);
    
    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        setIsFocused(false);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            setIsOpen(false);
            setIsFocused(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const ArrowIcon = isOpen ? UpArrow : DownArrow;
    const IconComponent = error ? Error : type === 'password' ? Eye : type === 'select' ? ArrowIcon : variantMap[icon as keyof IconsMap];

    const defaultStylesEnabled = !isFocused && !disabled && !error;
    const focusStylesEnabled = isFocused && !disabled && !error;

    return (
        <div className='relative w-fit h-fit flex flex-col' style={{ width: width || 'auto' }} ref={wrapperRef}>
            <span className={labelStyles({
                error: !!error,
                focus: focusStylesEnabled,
                disabled,
                default: defaultStylesEnabled
            })}>
                {label}
            </span>
            <div className='relative'>
                {type === 'select' ? (
                    <input
                        className={`${inputStyles({
                            error: !!error,
                            focus: focusStylesEnabled,
                            disabled,
                            default: defaultStylesEnabled,
                        })} ${!disabled ? 'cursor-pointer': 'cursor-not-allowed'}`}
                        value={selectedOption || ''}
                        readOnly
                        onFocus={() => {
                            setIsOpen(true);
                            setIsFocused(true);
                        }}
                        disabled={disabled}
                        {...props}
                    />
                ) : (
                    <input
                        className={inputStyles({
                            error: !!error,
                            focus: focusStylesEnabled,
                            disabled,
                            default: defaultStylesEnabled,
                        })}
                        onFocus={handleFocus}
                        type={type}
                        disabled={disabled}
                        {...props}
                    />
                )}
                {(icon || type === 'password' || type === 'select') && (
                    <span className='absolute right-[8px] top-1/2 transform -translate-y-1/2'>
                        <IconComponent className={iconStyles({ error: !!error, focus: focusStylesEnabled, disabled, default: defaultStylesEnabled })} />
                    </span>
                )}
            </div>
            {type === 'select' && isOpen && options && (
                <ul className='absolute z-20 top-full mt-[-20px] w-full border border-neutral-300 bg-neutral-white rounded-md shadow-md'>
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleOptionSelect(option)}
                            className="px-4 py-2 hover:bg-primary-100 cursor-pointer truncate max-w-full"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            <div className='h-[20px] w-[100%] overflow-hidden'>
                {error && <span className='text-negative-500 text-small text-left truncate max-w-full'>{error}</span>}
            </div>
        </div>
    );
}


export default Input;
