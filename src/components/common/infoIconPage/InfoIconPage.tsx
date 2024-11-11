import React from "react";
import RecipeIcon from "./RecipeIcon";

interface IconProperties {
    iconVariant: 'Clock' | 'User' | 'Difficulty' | 'Calories'
    upperText: string;
    lowerText: string;
}

const InfoIconPage: React.FC<IconProperties> = ({ upperText, lowerText, iconVariant }) => {
    return (
        <div className="info-icon-page items-center justify-start flex flex-col bg-neutral-white rounded-[31px] p-[4px] w-[61px] h-[99px] shadow-card">
            <div className="icon-container mb-[5px] mt-[4px]">
                {<RecipeIcon type={iconVariant} />}
            </div>
            <div className="text-container text-center">
                <text className="upper-text text-body-b">{upperText}</text>
                <h6 className="lower-text text-small mb-[5px]">{lowerText}</h6>
            </div>
        </div>
    );
};

export default InfoIconPage;