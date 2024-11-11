import IconTitle from "./IconTitle";
import {Meta} from "@storybook/react";
import Engine from "../../../../icons/usersMenu/Engine";

const meta = {
    title: 'Common/UsersMenu/IconTitle',
    component: IconTitle,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        title: {
            control: 'text',
        },
        icon: {
            control: 'object',
        },
    },
} satisfies Meta<typeof IconTitle>;

export default meta;

export const IconTitleDefault = {
    args: {
        title: 'Title',
        icon: <Engine/>,
    },
};