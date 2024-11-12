import React, { useState } from "react";
import ProfileIcon from "../../../../icons/header/mainHeader/ProfileIcon";
import CartIcon from "../../../../icons/header/mainHeader/CartIcon";
import UserMenu from "../../../common/usersMenu/menu/UsersMenu";

interface MainHeaderProps {
    text: string;
    productsInCart: number;
}

const MainHeader: React.FC<MainHeaderProps> = ({ text, productsInCart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleProfileClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="h-min-[90px] h-[90px] w-full flex items-end justify-center py-[8px] px-[16px] shadow-[0_-1px_4px_0_rgba(0,0,0,0.25)] bg-neutral-white relative">
            <div className="w-full flex justify-between items-center">
                <button onClick={handleProfileClick}>
                    <ProfileIcon />
                </button>
                <h4 className="text-center">{text}</h4>
                <button className="w-[40px] h-[40px] flex items-center relative">
                    <CartIcon />
                    {productsInCart > 0 && (
                        <span className="flex items-center justify-center bg-negative-400 py-[1px] px-[8px] rounded-full absolute top-0 right-0 text-neutral-white text-small">
                            {productsInCart}
                        </span>
                    )}
                </button>
            </div>
            {isMenuOpen &&
                <div className="z-30 absolute bottom-[-155px] left-[16px]">
                    <UserMenu onClose={closeMenu} />
                </div>
            }
        </header>
    );
};

export default MainHeader;