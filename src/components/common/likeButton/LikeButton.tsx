import React from 'react';
import HeartIcon from "../../../icons/likeButton/HeartIcon";
import HeartFilledIcon from "../../../icons/likeButton/HeartFilledIcon";

interface LikeButtonProps {
    onLike?: () => void;
    onNotLike?: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ onLike = () => {}, onNotLike = () => {}}) => {
    const [liked, setLiked] = React.useState(false);

    const handleClick = () => {
        setLiked(!liked);
        if (liked) {
            onNotLike();
        } else {
            onLike();
        }
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