import React from 'react';
import MainHeader from '../components/ui/header/mainHeader/MainHeader';
import NavBar from "../components/ui/footer/navBar/NavBar";
import SeachBar from "../components/common/searchBar/searchBar";
import FilterSection from "../components/filters/filterSection/FilterSection";
import BottomSheet from "../components/common/bottomSheet/BottomSheet";
import GridComponent from '../components/common/grid/GridComponent';
import ProductCard from '../components/cards/productCard/ProductCard';

function Ingredients() {
    const [bottomSheet, setBottomSheet] = React.useState(false);

    const openBottomSheet = () => {
        setBottomSheet(true);
    }

    const closeBottomSheet = () => {
        setBottomSheet(false);
    }

    const ingredients = [
        {
            ingredientName: 'Wheat flour',
            brandName: 'Grainy Goodness',
            activeIcons: [true, true, false, false],
            imageSrc: 'https://media.istockphoto.com/id/861019856/es/foto/harina-de-grano-entero-en-una-madera-o%C3%ADdos-bagwith-de-taz%C3%B3n-de-fuente-y-cilicio.jpg?s=612x612&w=0&k=20&c=DCp4zpUwoo6N370GnWP-6PDkhmRknFczHUuuao8gDWM=',
            price: 2000,
            discount: 20,
        },
        {
            ingredientName: 'Organic avocado',
            brandName: 'GreenValley Organic',
            activeIcons: [true, true, true, false],
            imageSrc: 'https://www.lanacion.com.ar/resizer/v2/la-palta-puede-conservarse-siguiendo-algunos-VQ7ZI4VCDBHI5EONBINARAJ2VI.jpg?auth=8630d8f6b8a98071ef38e89f7b5544eda631d10dbe91681879e7040a5529f40f&width=880&height=586&quality=70&smart=true',
            price: 5000,
            discount: 0,
        },
        {
            ingredientName: 'Farm Eggs',
            brandName: 'SunnyHill Farms',
            activeIcons: [false, true, true, false],
            imageSrc: 'https://static01.nyt.com/images/2024/05/29/dining/20EGGS1-esp/20EGGS1-superJumbo.jpg?quality=75&auto=webp',
            price: 1800,
            discount: 0,
        },
        {
            ingredientName: 'Butter',
            brandName: 'GoldenCream Dairy',
            activeIcons: [false, true, true, true],
            imageSrc: 'https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2016%2F07%2F26170559%2FManteca.jpg?auth=61da3d177fec8d6ec1f0b6bd83b547ad7cfaaabb25abecc08d862d1eebf171ed&smart=true&width=992&height=558&quality=85',
            price: 1000,
            discount: 20,
        },
        {
            ingredientName: 'Lemons',
            brandName: 'CitrusZest Co.',
            activeIcons: [true, true, true, false],
            imageSrc: 'https://www.quironsalud.com/es/comunicacion/actualidad/limon.ficheros/3153140-limon.jpg?width=800&height=594&aspectRatio=true',
            price: 1500,
            discount: 0,
        },
        {
            ingredientName: 'Chicken cutlets',
            brandName: 'TenderBite Poultry',
            activeIcons: [false, false, true, false],
            imageSrc: 'https://avicolamiluc.com.co/wp-content/uploads/2019/07/Pollo-fresco-despiece-1200x800-56166_1080x675.jpg',
            price: 4000,
            discount: 25,
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-10">
                <MainHeader productsInCart={10} text={"Ingredients"} />
            </div>
            <div className="sticky top-[90px] z-10 bg-neutral-white px-[16px] gap-[10px]">
                <SeachBar isSelector={false} placeholder={"Search products"} />
                <div className="my-[16px]">
                    <FilterSection text={"Order by"} onOrderBy={openBottomSheet} onFilter={openBottomSheet} />
                </div>
                </div>
            <div className="flex-grow px-[16px] pt-[16px] overflow-y-auto z-0">
                <GridComponent>
                    {ingredients.map((ingredient, index) => (
                        <ProductCard key={index} {...ingredient} />
                    ))}
                </GridComponent>
            </div>
            <div className="sticky bottom-0 z-10">
                <NavBar />
            </div>
            {bottomSheet && (
                <div className="z-20">
                    <BottomSheet onClose={closeBottomSheet} isOpen={bottomSheet} />
                </div>
            )}
        </div>
    );
}

export default Ingredients;