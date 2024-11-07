import React from 'react';
import InfoIconCard from './InfoIconCard'; // Asegúrate de que la ruta sea correcta
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Cards/InfoIconCard',
    component: InfoIconCard,

    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },

    argTypes: {
        isSelected: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        type: {
            control: {
                type: 'select',
                options: ['Vegan', 'Vegetarian', 'GlutenFree', 'Caloric'],
            },
            defaultValue: 'Vegan',
        },
    },
} satisfies Meta<typeof InfoIconCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotSelected: Story = {
    args: {
        isSelected: false,
        type: 'Vegan',
    },
    render: (args) => (
        <div style={{ width: '200px' }}>
            <InfoIconCard {...args} />
        </div>
    ),
};

export const Selected: Story = {
    args: {
        isSelected: true,
        type: 'Vegan',
    },
    render: (args) => (
        <div style={{ width: '200px' }}>
            <InfoIconCard {...args} />
        </div>
    ),
};
