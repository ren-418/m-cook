import Carrousel from './Carrousel';
import { Meta, StoryObj } from '@storybook/react';
import CategoryCard from "../../cards/categoryCard/CategoryCard";

const meta = {
    title: 'Common/Carrousel',
    component: Carrousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Carrousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CarouselComponentDefault: Story = {
    args: {
        children: [
            <CategoryCard
                key="1"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 1"
                onClick={() => {}}
            />,
            <CategoryCard
                key="2"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 2"
                onClick={() => {}}
            />,
            <CategoryCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 3"
                onClick={() => {}}
            />,
            <CategoryCard
                key="1"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 1"
                onClick={() => {}}
            />,
            <CategoryCard
                key="2"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 2"
                onClick={() => {}}
            />,
            <CategoryCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 3"
                onClick={() => {}}
            />,<CategoryCard
                key="1"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 1"
                onClick={() => {}}
            />,
            <CategoryCard
                key="2"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 2"
                onClick={() => {}}
            />,
            <CategoryCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 3"
                onClick={() => {}}
            />,<CategoryCard
                key="1"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 1"
                onClick={() => {}}
            />,
            <CategoryCard
                key="2"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 2"
                onClick={() => {}}
            />,
            <CategoryCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 3"
                onClick={() => {}}
            />,<CategoryCard
                key="1"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 1"
                onClick={() => {}}
            />,
            <CategoryCard
                key="2"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 2"
                onClick={() => {}}
            />,
            <CategoryCard
                key="3"
                imageUrl="https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                categoryName="Category 3"
                onClick={() => {}}
            />,
        ],
        title: 'Categories',
        width: "400px",
    },
};