import Button from "./Button";

import Add from "../../../icons/button/Add";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'Common/Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Button',
    },
    colorType: {
      control: 'select',
      options: ['primary', 'info'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolidLg: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    disabled: false,
    colorType: 'primary',
    size: 'lg',
    width: '300px',
    loading: false,
    leftIcon: <Add /> ,
    rightIcon: <Add />,
  },
};

