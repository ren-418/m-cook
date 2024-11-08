import { currencyMap } from "../../ui/footer/checkoutFooter/currencyMap";
import { inlineStyles } from "./inlineStyles";
import { PriceBoxProps } from "./PriceBoxProps";

export default function PriceBox({ inline = false, discount=0, currency, actualPrice }: PriceBoxProps) {
  return (
    <div className={inlineStyles({ inline: inline })}>
      {discount > 0 && <div className="flex justify-end items-center text-small gap-[3px] align-middle">
        <span className="bg-warning-400 rounded-[3px] text-small text-neutral-white px-[5px] py-[1px] ">-{discount}%</span>
        <del className={`text-neutral-700 text-small`}>{currencyMap[currency]}{actualPrice}</del>
      </div>}
      <span className="text-right text-neutral-800 text-label-m align-middle">
        {currencyMap[currency]}{actualPrice - (actualPrice * discount / 100)}
      </span>
        </div>
    );
}