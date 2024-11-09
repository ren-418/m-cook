import LikeButton from "./LikeButton";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
    title: 'Common/likeButton',
    component: LikeButton,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {},
} satisfies Meta<typeof LikeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UnfilledLikeButton: Story = {
    args: {},
};

