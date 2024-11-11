import LikeButton from "../../common/likeButton/LikeButton";
import IconsCard from "../../common/infoIconCard/IconsCard";
import React from "react";

interface RecipeCardProps {
    name: string,
    description: string,
    activeIcons: boolean[],
    imageSrc: string,
}

function RecipeCard({name, description, activeIcons, imageSrc}: RecipeCardProps) {
    return (
        <div className='relative select-none flex flex-col overflow-hidden rounded-[12px] shadow-card bg-neutral-white w-[170px] h-[252px]'>
            <div className='absolute top-[6px] right-[6px] z-10'>
                <LikeButton />
            </div>
            <img draggable={false} src={imageSrc} className='w-full h-[93px] object-cover'/>
            <div className='w-full h-full p-[8px] gap-[5px] flex flex-col justify-between'>
                <div className='w-full h-full gap-[4px] flex flex-col items-left'>
                    <p className='text-body-b text-neutral-800 w-full overflow-hidden text-ellipsis'
                       style={{
                           display: '-webkit-box',
                           WebkitBoxOrient: 'vertical',
                           WebkitLineClamp: 2,
                           height: 'auto',
                       }}
                    >{name}</p>
                    <p className='text-small text-neutral-700 w-full overflow-hidden text-ellipsis'
                       style={{
                           display: '-webkit-box',
                           WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 4,
                       }}
                    >{description}</p>
                </div>
                <IconsCard selections={activeIcons}/>
            </div>
        </div>
    )
}

export default RecipeCard