import IconsCard from './IconsCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconsCard> = {
    title: 'Cards/IconsCard',
    component: IconsCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        veganActive: { control: 'boolean' },
        vegetarianActive: { control: 'boolean' },
        glutenFreeActive: { control: 'boolean' },
        caloricActive: { control: 'boolean' },
    },
};
export default meta;

type Story = StoryObj<typeof IconsCard>;

export const Example: Story = {
    args: {
        veganActive: true,
        vegetarianActive: false,
        glutenFreeActive: false,
        caloricActive: false,
    },
};

export const AllInactive: Story = {
    args: {
        veganActive: false,
        vegetarianActive: false,
        glutenFreeActive: false,
        caloricActive: false,
    },
};

export const AllActive: Story = {
    args: {
        veganActive: true,
        vegetarianActive: true,
        glutenFreeActive: true,
        caloricActive: true,
    },
};
