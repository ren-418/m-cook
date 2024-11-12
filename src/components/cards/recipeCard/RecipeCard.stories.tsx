import RecipeCard from "./RecipeCard";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Cards/RecipeCard',
    component: RecipeCard,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        name: {
            control: 'text',
        },
        description: {
            control: 'text',
        },
        activeIcons: {
            control: 'object',
        },
        imageSrc: {
            control: 'text',
        },
    },
} satisfies Meta<typeof RecipeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RecipeCardDefault: Story = {
    args: {
        name: 'Recipe Name Could Be Max Two Lines Large',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        activeIcons: [true, false, true, false],
        imageSrc: 'https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
};