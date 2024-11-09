import React from 'react';
import HeartIcon from "../../../icons/likeButton/HeartIcon";
import HeartFilledIcon from "../../../icons/likeButton/HeartFilledIcon";

interface LikeButtonProps {
    onLike: () => void;
    onNotLike: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ onLike = () => {}, onNotLike = () => {} }) => {
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
            className="shadow-[0_0_4px_1px_rgba(0,0,0,0.1),0_0_1px_0_rgba(0,0,0,0.5)] w-[34px] h-[34px] rounded-[50%] bg-white flex items-center justify-center"
        >
            {liked ? <HeartFilledIcon/> : <HeartIcon/>}
        </button>
    );
};

export default LikeButton;