import IconTitle, { IconTitleProps } from "../iconTitle/IconTitle";
import Engine from "../../../../icons/usersMenu/Engine";
import Heart from "../../../../icons/usersMenu/Heart";
import Logout from "../../../../icons/usersMenu/Logout";
import React from "react";

interface UsersMenuProps {
    onSettingsClick?: () => void;
    onFavoritesClick?: () => void;
    onLogoutClick?: () => void;
}

const UsersMenu: React.FC<UsersMenuProps> = ({onSettingsClick, onLogoutClick, onFavoritesClick}) => {
    return (
        <div className="flex flex-col w-[200px] h-[180px] rounded-[8px] shadow-card align-middle justify-center py-[10px]">
            <IconTitle icon={<Engine/>} title={"Settings"} onClick={onSettingsClick}/>
            <IconTitle icon={<Heart/>} title={"Favorites"} onClick={onFavoritesClick}/>
            <IconTitle icon={<Logout/>} title={"Logout"} onClick={onLogoutClick}/>
        </div>
    );
};

export default UsersMenu;