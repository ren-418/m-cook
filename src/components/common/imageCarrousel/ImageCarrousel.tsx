import Slider from 'react-slick';
import BackArrow from '../../../icons/carrousel/BackArrow';
import ShareButton from '../../../icons/carrousel/ShareButton';


export type ImageCarrouselProps = {
  images: string[];
}


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 400,
  cssEase: "ease-in-out",
  arrows: false,
  dotsClass: 'slick-dots w-fit h-fit absolute bottom-[10px] left-0 right-0 m-auto gap-0',
  className: 'w-full h-full',
}



export default function ImageCarrousel(props: ImageCarrouselProps) {
  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      <BackArrow className={'absolute top-[40px] left-[15px] z-10 cursor-pointer'} />
      <ShareButton className={'absolute top-[40px] right-[15px] z-10 cursor-pointer'} />
      <Slider {...settings}>
        {props.images.map((image, index) => (
          <div className='w-full overflow-hidden h-full' key={index}>
            <img src={image} alt={""+index} style={{ width: '100%' }} />,
          </div>
        ))}
      </Slider>
    </div>
  );
}
