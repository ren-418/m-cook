import LikeButton from "./LikeButton";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
    title: 'Common/likeButton',
    component: LikeButton,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        onLike: {
            action: 'liked',
        },
        onNotLike: {
            action: 'not liked',
        },
    },
} satisfies Meta<typeof LikeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UnFilledLikeButton: Story = {
    args: {
        onLike: () => {},
        onNotLike: () => {},
    },
};

