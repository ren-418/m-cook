import ProductCard from "./ProductCard";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
    title: 'Cards/ProductCard',
    component: ProductCard,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        ingredientName: {
            control: 'text',
        },
        brandName: {
            control: 'text',
        },
        activeIcons: {
            control: 'object',
        },
        imageSrc: {
            control: 'text',
        },
        price: {
            control: 'number',
        },
        discount: {
            control: 'number',
        },
        onClick: {

        }
    },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductCardDefault: Story = {
    args: {
        ingredientName: 'Ingredient Name',
        brandName: 'Brand or shop selling this item',
        activeIcons: [true, false, true, false],
        imageSrc: 'https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        price: 2500,
        discount: 10,
    },
};