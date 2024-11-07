import React from 'react';
import Caloric from "../../../icons/infoIcon/Caloric";
import GlutenFree from "../../../icons/infoIcon/GlutenFree";
import Vegan from "../../../icons/infoIcon/Vegan";
import Vegetarian from "../../../icons/infoIcon/Vegetarian";

interface InfoIconCardProps {
    selected: {
        Vegan: boolean;
        Vegetarian: boolean;
        GlutenFree: boolean;
        Caloric: boolean;
    };
}

const InfoIconCard: React.FC<InfoIconCardProps> = ({ selected }) => {

    const icons = {
        Vegan: <Vegan selected={selected.Vegan} />,
        Vegetarian: <Vegetarian selected={selected.Vegetarian} />,
        GlutenFree: <GlutenFree selected={selected.GlutenFree} />,
        Caloric: <Caloric selected={selected.Caloric} />,
    };

    {//para el ejemplo}}
        const iconsOp = {
            Vegan: <Vegan selected={!selected.Vegan}/>,
            Vegetarian: <Vegetarian selected={!selected.Vegetarian}/>,
            GlutenFree: <GlutenFree selected={!selected.GlutenFree}/>,
            Caloric: <Caloric selected={!selected.Caloric}/>,
        };

    return (
        <div
            className="relative w-[164px] h-[104px] border-dashed border border-black rounded-[5px] flex flex-col items-center justify-center space-y-[15px]">
            <div
                className="flex space-x-[7px]">
                {['Vegan', 'Vegetarian', 'GlutenFree', 'Caloric'].map((iconType) => (
                    <div
                        key={iconType}
                        className={`w-[27px] h-[27px] rounded-full flex items-center justify-center cursor-default
                    ${selected[iconType as keyof typeof selected] ? 'bg-primary-800' : 'bg-primary-200'}`}
                    >
                        {icons[iconType as keyof typeof icons]}
                    </div>
                ))}
            </div>
            <div
                className="flex space-x-[7px]">
                {['Vegan', 'Vegetarian', 'GlutenFree', 'Caloric'].map((iconType) => (
                    <div
                        key={iconType}
                        className={`w-[27px] h-[27px] rounded-full flex items-center justify-center cursor-pointer
                    ${selected[iconType as keyof typeof selected] ? 'bg-primary-200' : 'bg-primary-800'}`}
                    >
                        {iconsOp[iconType as keyof typeof icons]}
                    </div>
                ))}
            </div>
        </div>
    );
}};

export default InfoIconCard;
