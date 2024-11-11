import InfoIconPage from './InfoIconPage';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InfoIconPage> = {
    title: 'Common/InfoIconPage',
    component: InfoIconPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        iconVariant: {
            control: 'select',
            options: ['Clock', 'User', 'Difficulty', 'Calories'],
        },
        upperText: {
            control: 'text',
        },
        lowerText: {
            control: 'text',
        },
    },
};
export default meta;

type Story = StoryObj<typeof InfoIconPage>;

export const InfoIconPageDefault: Story = {
    args: {
        iconVariant: "Clock",
        upperText: '35',
        lowerText: "Mins",
    },
};