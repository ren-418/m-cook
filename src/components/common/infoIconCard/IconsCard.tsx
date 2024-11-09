import React from 'react';
import InfoIcon from './InfoIcon';

interface IconsCardProperties {
    selections: boolean[];
}

const IconsCard: React.FC<IconsCardProperties> = ({ selections }) => {
    return (
        <div className="relative w-[154px] h-[39px] flex items-center space-x-[15px]">
            <InfoIcon type="Vegan" isActive={selections[0]} />
            <InfoIcon type="Vegetarian" isActive={selections[1]} />
            <InfoIcon type="GlutenFree" isActive={selections[2]} />
            <InfoIcon type="Caloric" isActive={selections[3]} />
        </div>
    );
};

export default IconsCard;

