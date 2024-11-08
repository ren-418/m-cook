import React from 'react';
import CaloricIcon from "../../../icons/infoIcon/Caloric";
import GlutenFreeIcon from "../../../icons/infoIcon/GlutenFree";
import VeganIcon from "../../../icons/infoIcon/Vegan";
import VegetarianIcon from "../../../icons/infoIcon/Vegetarian";

interface IconProperties {
    isActive?: boolean;
    type: 'Vegan' | 'Vegetarian' | 'GlutenFree' | 'Caloric';
}

const InfoIcon: React.FC<IconProperties> = ({ isActive = false, type }) => {
    const iconComponents = {
        Vegan: VeganIcon,
        Vegetarian: VegetarianIcon,
        GlutenFree: GlutenFreeIcon,
        Caloric: CaloricIcon,
    }

    const IconComponent = iconComponents[type];

    return (
        <div
            className={`w-[27px] h-[27px] rounded-full flex items-center justify-center
            ${isActive ? 'bg-primary-800' : 'bg-primary-200'}`}
        >
            <IconComponent selected={isActive} />
        </div>
    );
};

export default InfoIcon;
