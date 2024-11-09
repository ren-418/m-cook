import React from 'react';
import HeartIcon from "../../../icons/likeButton/HeartIcon";
import HeartFilledIcon from "../../../icons/likeButton/HeartFilledIcon";

const LikeButton: React.FC = () => {
    const [liked, setLiked] = React.useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };

    return (
        <button
            onClick={handleClick}
            className="shadow-card w-[34px] h-[34px] rounded-[50%] bg-neutral-white flex items-center justify-center"
        >
            {liked ? <HeartFilledIcon/> : <HeartIcon/>}
        </button>
    );
};

export default LikeButton;