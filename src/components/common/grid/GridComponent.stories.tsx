import GridComponent from './GridComponent';
import { Meta, StoryObj } from '@storybook/react';
import SmallProductCard from "../../cards/smallProductCard/SmallProductCard";

const meta = {
    title: 'Common/GridComponent',
    component: GridComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof GridComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GridComponentDefault: Story = {
    args: {
        children: [
            <SmallProductCard
                key="1"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 1"
            />,
            <SmallProductCard
                key="2"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 2"
            />,
            <SmallProductCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 3"
            />,
            <SmallProductCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 3"
            />,
            <SmallProductCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 3"
            />,
            <SmallProductCard
                key="1"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 1"
            />,
            <SmallProductCard
                key="2"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 2"
            />,
            <SmallProductCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 3"
            />,
            <SmallProductCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 3"
            />,
            <SmallProductCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                productName="Product 3"
            />
        ],
    },
};