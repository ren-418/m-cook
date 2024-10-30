import MainHeader from "./MainHeader";

import type { Meta, StoryObj } from '@storybook/react';
import NavBar from "../../footer/navBar/NavBar";


const meta = {
    title: 'ui/header/mainHeader',
    component: MainHeader,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        text: {
            control: {
                type: 'text',
            },
        },
        productsInCart: {
            control: {
                type: 'number',
            },
        },
    },
} satisfies Meta<typeof MainHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainHeaderDefault: Story = {
    args: {
        text: 'Title',
        productsInCart: 0,
    },
    render: (args) => (
        <div style={{ width: '500px' }}>
            <MainHeader {...args} />
        </div>
    ),
};

