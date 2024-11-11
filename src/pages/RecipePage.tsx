import React, { useState, useRef, MutableRefObject } from 'react';
import HeartFilledIcon from '../icons/likeButton/HeartFilledIcon';
import HeartIcon from '../icons/likeButton/HeartIcon';
import RecipeTextCard from '../components/cards/recipeTextCard/RecipeTextCard';
import Carrousel from '../components/common/carrousel/Carrousel';
import SmallProductCard from '../components/cards/smallProductCard/SmallProductCard';
import Button from '../components/common/button/Button';
import Cart from '../icons/button/Cart';
import RecipeCard from '../components/cards/recipeCard/RecipeCard';

function RecipePage() {
    const [liked, setLiked] = React.useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const togglePlayPause = () => {
        if (videoRef.current) {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
        }
    };

    const handleLike = () => {
        setLiked(!liked);
    };

  return (
    <div className='bg-background w-full overflow-hidden'>
        <section className='py-[12px] w-full flex flex-col gap-[12px] items-start'>
            <div className='px-[16px] flex flex-col gap-[16px]'>
                <div className='flex w-full justify-between items-start'>
                    <h2 className='w-full text-neutral-800 select-none'>Chocolate Covered Raspberries</h2>
                    <button className='w-fit h-fit' onClick={handleLike}>
                        {liked ? <HeartFilledIcon size={34}/> : <HeartIcon size={34}/>}
                    </button>
                </div>
                <div className='w-full'>
                    <RecipeTextCard content="Indulge in the perfect blend of sweet and tart with Chocolate Covered Raspberries! Fresh, juicy raspberries are delicately dipped in rich, velvety melted chocolate, creating a decadent treat that's both elegant and easy to make. These bite-sized delights are perfect for special occasions, dessert platters, or as a simple homemade indulgence. The contrasting textures of smooth chocolate and vibrant raspberries make each bite irresistible!"/>
                </div>
            </div>
            <div className='px-[16px] rounded-[12px] overflow-hidden relative w-full h-[170px]'>
                <video
                    ref={videoRef}
                    src="/videos/recipe.mp4" 
                    controls={true}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    style={{objectFit: 'cover', width: '100%'}}
                    onClick={togglePlayPause}
                    className='h-[170px] rounded-[12px] shadow-card'
                />
                {!playing && <button onClick={togglePlayPause} className='flex justify-center items-center bg-[rgba(23,166,142,0.7)] w-[50px] h-[50px] absolute top-0 bottom-0 left-0 right-0 m-auto rounded-full'>
                    <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 8.90192C21.5 10.0566 21.5 12.9434 19.5 14.0981L5.25 22.3253C3.24999 23.48 0.749999 22.0366 0.749999 19.7272L0.75 3.27276C0.75 0.963355 3.25 -0.48002 5.25 0.674681L19.5 8.90192Z" fill="white" fill-opacity="0.8"/>
                    </svg>
                </button>}
            </div>
            <div className='w-full'>
                <Carrousel title='Used Ingredients'>
                    <SmallProductCard productName='Ingredient' imageUrl='https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
                    <SmallProductCard productName='Ingredient' imageUrl='https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
                    <SmallProductCard productName='Ingredient' imageUrl='https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
                    <SmallProductCard productName='Ingredient' imageUrl='https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
                </Carrousel>
            </div>
            <div className='px-[16px] w-full'>
                <Button leftIcon={<Cart/>} size="sm" width='100%'>Add Products To Cart</Button>
            </div>
            <div className='w-full'>
                <Carrousel title='Similar Recipes'>
                    <RecipeCard imageSrc='https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' name='Recipe Name large text with mire daidn dadn' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ffsdf sfsdf sfdsf sdfsdf' activeIcons={[true, false, true, false]}/>
                    <RecipeCard imageSrc='https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' name='Recipe Name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sfsdf' activeIcons={[true, false, true, false]}/>
                    <RecipeCard imageSrc='https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' name='Recipe Name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sfsdfds' activeIcons={[true, false, true, false]}/>
                </Carrousel>
            </div>
        </section>
    </div>
  )
}

export default RecipePage