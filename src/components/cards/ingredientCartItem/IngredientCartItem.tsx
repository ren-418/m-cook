import PriceBox from "../../common/priceBox/PriceBox";
import NumberInput from "../../common/numberInput/numberInput";
import React from "react";
import {SupportedCurrencies} from "../../ui/footer/checkoutFooter/checkoutFooterProps";

interface IngredientCartItemProps {
    name: string,
    brand: string,
    finalPrice: number,
    previousPrice?: number,
    discount?: number,
    currency: SupportedCurrencies,
    imageUrl: string
}

const IngredientCartItem: React.FC<IngredientCartItemProps> = ({ name, brand, finalPrice, previousPrice, discount, currency, imageUrl }) => {
    const [count, setCount] = React.useState(1);

    return (
        <div className="flex gap-4 w-[390px] h-[120px] shadow-menu px-[13px] py-[16px]">
            <div className="w-[266px] h-[88px] gap-[13px] flex ">
                <img className="h-[80px] w-[80px] rounded-[20px] object-cover" src={imageUrl} alt="product"/>
                <div className="flex flex-col gap-1">
                    <span className="text-label-m text-neutral-dark">{name}</span>
                    <span className="text-label-s text-neutral-light">{brand}</span>
                </div>
            </div>
            <div className="flex flex-col justify-between w-[90px] h-[88px]">
                <PriceBox currency={currency} actualPrice={finalPrice * count} discount={discount} inline={false}/>
                <NumberInput width={"100%"} count={count} setCount={setCount}/>
            </div>
        </div>
    );
};

export default IngredientCartItem;