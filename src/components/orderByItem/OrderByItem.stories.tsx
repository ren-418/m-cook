import { Meta, StoryObj } from "@storybook/react";
import OrderByItem from "./OrderByItem";

const meta = {
    title: 'Components/OrderByItem',
    component: OrderByItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        criteria: {
            control: 'text',
        },
        index: {
            control: 'number',
        },
        onClick: {}
    },
} satisfies Meta<typeof OrderByItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OrderByItemDefault: Story = {
    args: {
        criteria: 'Criteria',
        index: 0,
        onClick: () => {}
    },
    render: (args) => (
        <div style={{ width: '358px' }}>
            <OrderByItem {...args} />
        </div>
    ),
};