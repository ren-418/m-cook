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
        icon: {
            control: 'text',
        },
        title: {
            control: 'text',
        },
    },
} satisfies Meta<typeof IconTitle>;

export default meta;

export const IconTitleDefault = {
    args: {
        icon: <Engine/>,
        title: 'Title',
    },
};