import CheckBox from "./CheckBox";

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Common/checkBox',
    component: CheckBox,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        onChecked: {
            action: 'checked',
        },
        onNotChecked: {
            action: 'not checked',
        },
    },
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UnClickedCheckBox: Story = {
    args: {
        onChecked: () => {},
        onNotChecked: () => {},
    },
};

