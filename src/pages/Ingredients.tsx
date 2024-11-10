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
            ingredientName: 'Tomato',
            brandName: 'Fresh Farm',
            activeIcons: [true, true, true, false],
            imageSrc: 'https://th.bing.com/th/id/OIP.7sXD1I8TuX9VresgBYIzGgHaE7?rs=1&pid=ImgDetMain',
            price: 150,
            discount: 5,
        },
        {
            ingredientName: 'Cucumber',
            brandName: 'Green Valley',
            activeIcons: [true, true, true, false],
            imageSrc: 'https://th.bing.com/th/id/OIP.5aNxG38_hlrsnAa8myd71AHaE9?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 100,
            discount: 10,
        },
        {
            ingredientName: 'Carrot',
            brandName: 'Healthy Harvest',
            activeIcons: [true, true, true, false],
            imageSrc: 'https://th.bing.com/th/id/OIP.ZIZkZ8LFERnX8UE0KyAeNAHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 200,
            discount: 15,
        },
        {
            ingredientName: 'Bread',
            brandName: 'Baker´s Delight',
            activeIcons: [false, true, false, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.pD8Wvzmijs6b6_BA31MCGQHaE7?rs=1&pid=ImgDetMain',
            price: 50,
            discount: 0,
        },
        {
            ingredientName: 'Olive Oil',
            brandName: 'Little Italy',
            activeIcons: [true, true, true, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.r6C3B1mkbuNIl5yOixBC5QHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 5080,
            discount: 0,
        },
        {
            ingredientName: 'Garlic',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.LiyxognwK96NasK4O-ejegHaE8?rs=1&pid=ImgDetMain',
            price: 50,
            discount: 0,
        },
        {
            ingredientName: 'Ginger',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.7NP5sY4Ub4QR22VwB1H4ZwHaDx?w=325&h=178&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 50,
        },
        {
            ingredientName: 'Flour',
            brandName: 'Hidden Valley',
            activeIcons: [true, true, true, false],
            imageSrc: 'https://th.bing.com/th/id/OIP.05wWtXVU9dzqGdBcA2LG_gHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 50,
        },
        {
            ingredientName: 'Mushroom',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.umDFsNwsAiMOT6Nar3jjlgHaE8?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 50,
        },
        {
            ingredientName: 'Broccoli',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.isupwQ-xFxilWQl60pIBzwHaDt?w=296&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 50,
        },
        {
            ingredientName: 'Salmon',
            brandName: 'Farm Fresh',
            activeIcons: [false, false, true, false],
            imageSrc: 'https://th.bing.com/th/id/OIP.Uba8254aIu9IL_tqmVW5XgHaE8?w=299&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 50,
        },
        {
            ingredientName: 'Cauliflower',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.H0gEadbbC7KbcrwPdBLuFgHaFj?w=261&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 50,
        },
        {
            ingredientName: 'Zucchini',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.WWzDnC9aErssrwp5Hms6OwHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 50,
        },
        {
            ingredientName: 'Asparagus',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://th.bing.com/th/id/R.249acb9c463445cd1fd7e20b00832923?rik=lTSOib7uhrrbcg&pid=ImgRaw&r=0',
            price: 50,
        },
        {
            ingredientName: 'Eggplant',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://s3.abcstatics.com/media/bienestar/2020/07/28/berenjena-ficha-ktMB--1248x698@abc.jpg',
            price: 50,
        },
        {
            ingredientName: 'Cabbage',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.rEE6csk3On91lRXSz-zGAAHaE8?w=265&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 50,
        },
        {
            ingredientName: 'Pumpkin',
            brandName: 'Farm Fresh',
            activeIcons: [true, false, false, true],
            imageSrc: 'https://th.bing.com/th/id/OIP.Isy4gl521MyAcpId_1EEHwHaEK?w=332&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: 50,
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