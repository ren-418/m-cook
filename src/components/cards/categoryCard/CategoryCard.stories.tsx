import {Meta, StoryObj} from "@storybook/react";
import CategoryCard from "./CategoryCard";


const meta = {
    title: 'Cards/categoryCard',
    component: CategoryCard,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        imageUrl: {
            control: 'text',
        },
        categoryName: {
            control: 'text',
        },
        onClick: {

        }
    },
} satisfies Meta<typeof CategoryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CategoryCardDefault: Story = {
    args: {
        imageUrl: 'https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        categoryName: 'Category Name',
        onClick: ()=> {}
    },
};