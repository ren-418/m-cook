import CheckBox from "./CheckBox";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Common/checkBox',
    component: CheckBox,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const UnclickedCheckBox: Story = {
    args: {},
};

