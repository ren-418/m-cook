import {Meta, StoryObj} from "@storybook/react";
import RecipeTextCard from "./RecipeTextCard";


const meta = {
    title: 'Cards/RecipeTextCard',
    component: RecipeTextCard,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        content: {
            control: 'text',
        },
    },
} satisfies Meta<typeof RecipeTextCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RecipeTextCardDefault: Story = {
    args: {
        content: "Indulge in the perfect blend of sweet and tart with ChocolateCovered Raspberries! Fresh, juicy raspberries are delicately dipped in rich, velvety melted chocolate, creating a decadent treat that's both elegant and easy to make. These bite-sized delights are perfect for special occasions, dessert platters, or as a simple homemade indulgence. The contrasting textures of smooth chocolate and vibrant raspberries make each bite irresistible!",
    },
    render: (args) => (
        <div style={{ width: '358px' }}>
            <RecipeTextCard {...args} />
        </div>
    ),
};