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
        <div className="flex gap-4 w-[390px] h-[120px] border-b-[1px] border-b-neutral-200 px-[13px] py-[16px]">
            <div className="w-[266px] h-[88px] gap-[13px] flex items-center">
                <img className="h-[80px] w-[80px] rounded-[20px] object-cover" src={imageUrl} alt="product"/>
                <div className="flex flex-col gap-1 h-full w-full">
                    <span className="text-label-m text-neutral-800 overflow-hidden text-ellipsis"
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                      }}
                      >{name}</span>
                    <span className="text-small text-neutral-700 overflow-hidden text-ellipsis"
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 1,
                      }}
                      >{brand}</span>
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