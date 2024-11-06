import {Meta, StoryObj} from "@storybook/react";
import ReelCard from "./ReelCard";


const meta = {
    title: 'Cards/reelCard',
    component: ReelCard,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        imageUrl: {
            control: 'text',
        },
        title: {
            control: 'text',
        },
        onClick: {

        }
    },
} satisfies Meta<typeof ReelCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReelCardDefault: Story = {
    args: {
        imageUrl: 'https://www.recetasderechupete.com/wp-content/uploads/2022/11/Cookies-de-chocolate-presentacion-1200x828.jpg',
        title: 'Vanilla cookies with chocolate chips',
        onClick: ()=> {}
    },
};