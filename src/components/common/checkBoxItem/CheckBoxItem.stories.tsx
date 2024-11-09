import CheckBoxItem from "./CheckBoxItem";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Common/CheckBoxItem',
    component: CheckBoxItem,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        title: {
            control: {
                type: 'text',
            },
        },
    },
} satisfies Meta<typeof CheckBoxItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCheckBoxItem: Story = {
    args: {
        title: 'Filter',
    },
};