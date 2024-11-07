import React from 'react';
import InfoIconCard from './InfoIconCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Cards/InfoIconCard',
    component: InfoIconCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        selected: {
            control: {
                type: 'object'
            },
            defaultValue: {
                Vegan: true,
                Vegetarian: false,
                GlutenFree: false,
                Caloric: false,
            },
        },
    },
} satisfies Meta<typeof InfoIconCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        selected: {
            Vegan: false,
            Vegetarian: false,
            GlutenFree: false,
            Caloric: false,
        },
    },
    render: (args) => (
        <InfoIconCard {...args} />
    ),
};
