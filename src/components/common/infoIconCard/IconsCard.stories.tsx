import IconsCard from './IconsCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconsCard> = {
    title: 'Common/InfoIcons',
    component: IconsCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        selections: {
            control: {
                type: 'object',
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof IconsCard>;

export const IconsCardDefault: Story = {
    args: {
        selections: [false, false, false, false],
    },
};