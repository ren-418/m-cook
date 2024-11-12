import React, { useEffect, useRef } from "react";
import IconTitle from "../iconTitle/IconTitle";
import Engine from "../../../../icons/usersMenu/Engine";
import Heart from "../../../../icons/usersMenu/Heart";
import Logout from "../../../../icons/usersMenu/Logout";

interface UsersMenuProps {
    onSettingsClick?: () => void;
    onFavoritesClick?: () => void;
    onLogoutClick?: () => void;
    onClose: () => void;
}

const UsersMenu: React.FC<UsersMenuProps> = ({ onSettingsClick, onLogoutClick, onFavoritesClick, onClose }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={menuRef} className="w-[200px] h-fit bg-white rounded-[8px] shadow-card flex flex-col py-[10px] bg-neutral-white z-50">
            <IconTitle icon={<Engine />} title={"Settings"} onClick={onSettingsClick} />
            <IconTitle icon={<Heart />} title={"Favorites"} onClick={onFavoritesClick} />
            <IconTitle icon={<Logout />} title={"Logout"} onClick={onLogoutClick} />
        </div>
    );
};

export default UsersMenu;