import LikeButton from "../../common/likeButton/LikeButton";
import IconsCard from "../../common/infoIconCard/IconsCard";
import React from "react";

interface RecipeCardProps {
    ingredientName: string,
    brandName: string,
    activeIcons: boolean[],
    imageSrc: string,
}

function RecipeCard({ingredientName, brandName, activeIcons, imageSrc}: RecipeCardProps) {
    return (
        <div className='select-none flex flex-col overflow-hidden rounded-[12px] shadow-card bg-neutral-white w-[170px] h-[252px]'>
            <div className='absolute top-[13px] right-[13px] z-10'>
                <LikeButton />
            </div>
            <img draggable={false} src={imageSrc} className='w-full h-[93px] object-cover'/>
            <div className='w-full h-full p-[8px] gap-[5px] flex flex-col'>
                <div className='w-full h-full gap-[4px] flex flex-col items-left'>
                    <p className='text-body-b text-neutral-800 w-full overflow-hidden text-ellipsis'
                       style={{
                           display: '-webkit-box',
                           WebkitBoxOrient: 'vertical',
                           WebkitLineClamp: 2,
                           height: 'auto',
                       }}
                    >{ingredientName}</p>
                    <p className='text-small text-neutral-700 w-full overflow-hidden text-ellipsis'
                       style={{
                           display: '-webkit-box',
                           WebkitBoxOrient: 'vertical',
                           WebkitLineClamp: 3,
                       }}
                    >{brandName}</p>
                </div>
                <div className="py-[1px]">
                    <IconsCard selections={activeIcons}/>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard