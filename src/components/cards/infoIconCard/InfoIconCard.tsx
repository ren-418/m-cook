import React from 'react';
import Caloric from "../../../icons/infoIcon/Caloric";
import GlutenFree from "../../../icons/infoIcon/GlutenFree";
import Vegan from "../../../icons/infoIcon/Vegan";
import Vegetarian from "../../../icons/infoIcon/Vegetarian";


interface InfoIconCardProps {
    selected: boolean;
    type: 'Vegan' | 'Vegetarian' | 'GlutenFree' | 'Caloric';
}

const InfoIconCard: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
    const icons = {
        Vegan: <Vegan selected={isSelected} />,
        Vegetarian: <Vegetarian selected={isSelected} />,
        GlutenFree: <GlutenFree selected={isSelected} />,
        Caloric: <Caloric selected={isSelected} />
    };

    return (
        <div
            className={`w-[164px] h-[104px] border-dashed border border-black rounded-[5px] relative flex flex-col justify-between p-[5px]`}
        >
            <div className="flex flex-row gap-[10px] justify-between items-center">
                {['Vegan', 'Vegetarian', 'GlutenFree', 'Caloric'].map((iconType, index) => (
                    <div
                        key={iconType}
                        className="w-[27px] h-[27px] rounded-full flex items-center justify-center cursor-pointer"
                        style={{
                            backgroundColor: isSelected ? 'bg-primary-800' : 'bg-primary-200',
                            position: 'absolute',
                            top: index < 4 ? '20px' : '62px',
                            left: `${20 + index * 34}px`,
                        }}
                    >
                        {icons[iconType as keyof typeof icons]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoIconCard;