import React from 'react';
import ClockIcon from "../../../icons/recipeIcon/ClockIcon";
import UserIcon from "../../../icons/recipeIcon/UserIcon";
import DifficultyIcon from "../../../icons/recipeIcon/DifficultyIcon";
import CaloriesIcon from "../../../icons/recipeIcon/CaloriesIcon";


interface RecipeIconProperties {
    type: 'Clock' | 'User' | 'Difficulty' | 'Calories';
}

const RecipeIcon: React.FC<RecipeIconProperties> = ({ type }) => {
    const iconComponents = {
        Clock: ClockIcon,
        User: UserIcon,
        Difficulty: DifficultyIcon,
        Calories: CaloriesIcon,
    }

    const RecipeInfoComponent = iconComponents[type];

    return (
        <div className="w-[42px] h-[42px] bg-primary-500 rounded-[21px] flex items-center justify-center">
            <RecipeInfoComponent />
        </div>
    );
};

export default RecipeIcon;
