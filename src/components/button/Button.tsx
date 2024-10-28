import { cva, VariantProps } from 'class-variance-authority'
import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { IconButtonProps } from '../../icons/button/IconButton';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  leftIcon?: ReactElement<IconButtonProps>;
  rightIcon?: ReactElement<IconButtonProps>;
}

const buttonVariants = cva(
  // Default class names
  'rounded-md px-4 py-2 transition duration-200 ease-in-out flex items-center gap-2 appearance-none focus:outline-none'
  , {
  // Variants class names
  variants: {
    variant: {
      solid: 'border-none disabled:opacity-50 disabled:cursor-not-allowed',
      outline: 'border-2 border-solid disabled:opacity-50 disabled:cursor-not-allowed',
      text: 'border-none disabled:opacity-50 disabled:cursor-not-allowed'
    },
    size: {
      sm: 'min-h-[34px] h-[34px]',
      lg: 'min-h-[44px] h-[44px]'
    },
    colorType: {
      primary: '',
      info: ''
    }
  },
  compoundVariants: [
    // Solid Variant Background Colors
    { variant: 'solid', colorType: 'primary', class: 'bg-primary-500 text-neutral-white hover:opacity-50' },
    { variant: 'solid', colorType: 'info', class: 'bg-info-500 text-neutral-white hover:opacity-50' },

    // Outline Variant Border Colors
    { variant: 'outline', colorType: 'primary', class: 'border-primary-500 text-primary-500 hover:opacity-50' },
    { variant: 'outline', colorType: 'info', class: 'border-info-500 text-info-500 hover:opacity-50' },

    // Text Variant Hover Colors
    { variant: 'text', colorType: 'primary', class: 'text-primary-500 hover:opacity-50' },
    { variant: 'text', colorType: 'info', class: 'text-info-500 hover:opacity-50' },
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'lg',
    colorType: 'primary',
  }
});

const iconColorMap = {
  solid: {
    primary: 'text-neutral-white',
    info: 'text-neutral-white',
  },
  outline: {
    primary: 'text-primary-500',
    info: 'text-info-500',
  },
  text: {
    primary: 'text-primary-500',
    info: 'text-info-500',
  },
};

function Button({
  children,
  variant='solid',
  size='lg',
  colorType='primary',
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const iconColorClass = iconColorMap[variant!!][colorType!!];
  const leftIconWithColor = leftIcon ? React.cloneElement(leftIcon, { className: iconColorClass }) : null;
  const rightIconWithColor = rightIcon ? React.cloneElement(rightIcon, { className: iconColorClass }) : null;
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant, size, colorType })) + ' text-label-s'}
    >
      {leftIcon && <span className={`flex-shrink-0`}>{leftIconWithColor}</span>}
      {children}
      {rightIcon && <span className={`flex-shrink-0`}>{rightIconWithColor}</span>}
    </button>
  );
}

export default Button