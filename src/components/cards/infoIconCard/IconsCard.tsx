import React from 'react';
import InfoIcon from './InfoIcon';

interface IconsCardProperties {
    veganActive: boolean;
    vegetarianActive: boolean;
    glutenFreeActive: boolean;
    caloricActive: boolean;
}

const IconsCard: React.FC<IconsCardProperties> = ({
    veganActive,
    vegetarianActive,
    glutenFreeActive,
    caloricActive,
 }) => {
    return (
        <div className="relative w-[154px] h-[39px] border-dashed border border-black rounded-[5px] flex items-center  space-x-[15px]">
            <InfoIcon type="Vegan" isActive={veganActive} />
            <InfoIcon type="Vegetarian" isActive={vegetarianActive} />
            <InfoIcon type="GlutenFree" isActive={glutenFreeActive} />
            <InfoIcon type="Caloric" isActive={caloricActive} />
        </div>
    );
};

export default IconsCard;

