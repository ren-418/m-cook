import IngredientCartItem from "./IngredientCartItem";
import {Meta, StoryObj} from "@storybook/react";

const meta ={
    title: "components/cards/IngredientCartItem",
    component: IngredientCartItem,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        currency: {
            control: "select",
            options: ["USD", "EUR", "GBP", "ARS"],
        },
        finalPrice: {
            control: { type: "number", min: 1 },
            defaultValue: 100,
        },
        discount: {
            control: { type: "number", min: 0 },
            defaultValue: 100,
        },
    },
} satisfies Meta<typeof IngredientCartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IngredientCartItemDefault: Story = {
    args: {
        name: "Tomato",
        brand: "Organic",
        currency: "USD",
        finalPrice: 100,
        discount: 50,
        imageUrl: "https://www.bing.com/th?id=OIP.m1iDbn7m4CJxTGIy3hi20gHaGD&w=174&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },

    render: (args) => (
        <IngredientCartItem {...args} />
    )
};