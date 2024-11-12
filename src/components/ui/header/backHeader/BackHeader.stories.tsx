import BackHeader from "./BackHeader";
import {Meta} from "@storybook/react";

const meta = {
    title: 'UI/Header/BackHeader',
    component: BackHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
        },
        onBack: {}
    },
} as Meta<typeof BackHeader>;

export default meta;

type Story = typeof meta;

export const BackHeaderDefault: Story = {
    args: {
        title: 'Title',
        onBack: () => {},
    },
};