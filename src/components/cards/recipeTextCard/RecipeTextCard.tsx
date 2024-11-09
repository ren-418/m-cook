import React, { useRef, useState, useEffect } from 'react';
import Button from '../../common/button/Button';

type RecipeTextCardProps = {
    content: string;
}

function RecipeTextCard({ content }: RecipeTextCardProps) {
    const [showButton, setShowButton] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const lineHeight = parseFloat(
                window.getComputedStyle(textRef.current).lineHeight
            );
            const maxLines = 5;
            const maxHeight = lineHeight * maxLines;

            if (textRef.current.scrollHeight > maxHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }
    }, [content]);

    const handleToggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div
            className='bg-neutral-white rounded-[12px] shadow-card w-full overflow-hidden
            flex flex-col items-center gap-[10px] p-[12px]'
        >
            <h4 className='select-none text-neutral-800 w-full'>How To Make It</h4>
            <p
                ref={textRef}
                className={`select-none w-full text-left text-body text-neutral-700 overflow-hidden text-ellipsis ${isExpanded ? '' : 'line-clamp-5'}`}
                style={{
                    display: isExpanded ? 'block' : '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: isExpanded ? 'none' : 5,
                }}
            >
                {content}
            </p>
            {showButton && (
                <Button
                    variant='outline'
                    colorType='primary'
                    size='sm'
                    width='176px'
                    onClick={handleToggleExpand}
                >
                    {isExpanded ? 'Show Less' : 'Continue Reading'}
                </Button>
            )}
        </div>
    );
}

export default RecipeTextCard;
