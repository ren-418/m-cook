import SmallProductCard from "./smallProductCard";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
    title: 'Cards/smallProductCard',
    component: SmallProductCard,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        imageUrl: {
            control: 'text',
        },
        productName: {
            control: 'text',
        },
        onClick: {

        }
    },
} satisfies Meta<typeof SmallProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallProductCardDefault: Story = {
    args: {
        imageUrl: 'https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        productName: 'Product Name',
        onClick: ()=> {}
    },
};