import Slider from 'react-slick';
import BackArrow from '../../../icons/carrousel/BackArrow';
import ShareButton from '../../../icons/carrousel/ShareButton';


export type ImageCarrouselProps = {
  images: JSX.Element[];
}


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 3000,
  cssEase: "ease-in-out",
  arrows: false,
}



export default function ImageCarrousel(props: ImageCarrouselProps) {
  return (
    <div className="relative">
      <BackArrow className={'absolute top-0 left-0 m-2 z-10'} />
      <ShareButton className={'absolute top-0 right-0 m-2 z-10'} />
      <Slider {...settings}>
        {props.images.map((image, index) => (
          <div className='w-full overflow-hidden' key={index}>{image}</div>
        ))}
      </Slider>
    </div>
  );
}
