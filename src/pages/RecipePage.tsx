import React, { useState, useRef, MutableRefObject } from 'react';
import HeartFilledIcon from '../icons/likeButton/HeartFilledIcon';
import HeartIcon from '../icons/likeButton/HeartIcon';
import RecipeTextCard from '../components/cards/recipeTextCard/RecipeTextCard';
import Carrousel from '../components/common/carrousel/Carrousel';
import SmallProductCard from '../components/cards/smallProductCard/SmallProductCard';
import Button from '../components/common/button/Button';
import Cart from '../icons/button/Cart';
import RecipeCard from '../components/cards/recipeCard/RecipeCard';
import InfoIconPage from '../components/common/infoIconPage/InfoIconPage';
import ImageCarrousel from '../components/common/imageCarrousel/ImageCarrousel';
import Image1 from '../imgs/franui 1.jpg';
import Image2 from '../imgs/franui 2.jpg';

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
        <section className='pb-[12px] w-full flex flex-col gap-[12px] items-start'>
            <ImageCarrousel images={[Image1, 
            "https://statics.launion.digital/2024/06/crop/6675d73be4ede__940x620.webp",
            Image2,
            "https://dcdn.mitiendanube.com/stores/001/150/885/products/cp2cpmbwwaevbit1-c0ef3925e27403342015867317243093-1024-1024.jpg"]}/>
            <div className='px-[16px] flex flex-col gap-[16px]'>
                <div className='flex w-full justify-between items-start'>
                    <h2 className='w-full text-neutral-800 select-none'>Chocolate Covered Raspberries</h2>
                    <button className='w-fit h-fit' onClick={handleLike}>
                        {liked ? <HeartFilledIcon size={34}/> : <HeartIcon size={34}/>}
                    </button>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <InfoIconPage upperText="35" lowerText="mins" iconVariant='Clock'/>
                    <InfoIconPage upperText="3" lowerText="" iconVariant='User'/>
                    <InfoIconPage upperText="Easy" lowerText="" iconVariant='Difficulty'/>
                    <InfoIconPage upperText="365" lowerText="Kcal" iconVariant='Calories'/>
                </div>
                <div className='w-full'>
                    <RecipeTextCard content="Wash the raspberries and gently pat them dry with paper towels, being careful to not damage or break them.
                        Place the white chocolate in a medium, microwave-safe bowl and heat in the microwave for 30 seconds then stir and repeat until it’s melted and smooth. You can also place the chocolate in a double boiler to melt it.
                        Use a toothpick to poke the bottom of the raspberry (the closed small end) and dip the raspberry in the melted white chocolate. Do your best to fill the whole of the raspberry with chocolate.
                        Place the dipped chocolate on the prepared baking sheet on its side and repeat with all fo the raspberries. When they’re done, place the baking sheet in the freezer.
                        While they’re chilling, melt the dark chocolate the same way you did with the white chocolate. When the raspberries and white chocolate are frozen and set, repeat the process with the dark chocolate and place back in the freezer. Freeze until set and serve frozen."
                    />
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
                    <SmallProductCard productName='Organic Raspberries'
                                      imageUrl='https://curingshot.de/wp-content/uploads/2021/03/picked-organic-raspberries-macro-1024x683.jpg'/>
                    <SmallProductCard productName='Milk Chocolate'
                                      imageUrl='https://glutenfreemarket.com.ar/wp-content/uploads/2021/09/aguila_chocolatetazafinallogo.jpg'/>
                    <SmallProductCard productName='White Chocolate'
                                      imageUrl='https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FSeries%2F2022-10-how-to-melt-white-chocolate%2Fhow-to-melt-white-chocolate-931'/>
                </Carrousel>
            </div>
            <div className='px-[16px] w-full'>
                <Button leftIcon={<Cart/>} size="sm" width='100%'>Add Products To Cart</Button>
            </div>
            <div className='w-full'>
                <Carrousel title='Similar Recipes'>
                    <RecipeCard imageSrc='https://www.hola.com/horizon/landscape/ca98217f5ae4-naranja-chocolate-t.jpg'
                                name='Chocolate Dipped Orange Slices'
                                description='Fresh orange slices covered in dark chocolate, offering a citrusy twist on a classic treat.'
                                activeIcons={[true, true, true, false]}/>
                    <RecipeCard imageSrc='https://lowcarbyum.com/wp-content/uploads/2020/05/almond-flour-pancakes-sq-lcy.jpg'
                                name='Almond Flour Pancakes'
                                description='Light and fluffy pancakes made with almond flour, ideal for a gluten-free breakfast. Serve with fresh fruit and maple syrup for a wholesome, delicious start to your day.'
                                activeIcons={[false, true, true, true]}/>
                    <RecipeCard imageSrc='https://www.gourmet.cl/wp-content/uploads/2016/09/Helado-Frutilla-iStock-1-570x432.jpg'
                                name='Raspberry Sorbet'
                                description='Refreshing, dairy-free frozen dessert made from fresh raspberries, sugar, and a hint of lemon. Bursting with vibrant color and sweet-tart flavor, it’s a light and fruity treat perfect for cooling down on a hot day!'
                                activeIcons={[true, true, true, false]}/>
                </Carrousel>
            </div>
        </section>
    </div>
  )
}

export default RecipePage