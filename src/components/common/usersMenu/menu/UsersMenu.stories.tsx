import { Meta } from "@storybook/react";
import UsersMenu from "./UsersMenu";

const meta = {
    title: 'Common/UsersMenu/UsersMenu',
    component: UsersMenu,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
} satisfies Meta<typeof UsersMenu>;

export default meta;

export const UsersMenuDefault = {
    args: {
        onSettingsClick: () => console.log('Settings clicked'),
        onFavoritesClick: () => console.log('Favorites clicked'),
        onLogoutClick: () => console.log('Logout clicked'),
    },
};