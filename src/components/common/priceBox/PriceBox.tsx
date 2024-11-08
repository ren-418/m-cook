import { currencyMap } from "../../ui/footer/checkoutFooter/currencyMap";
import { inlineStyles } from "./inlineStyles";
import { PriceBoxProps } from "./PriceBoxProps";

export default function PriceBox({ inline = false, ...props }: PriceBoxProps) {
    return (
        <div className={inlineStyles({ inline: inline })}>
            {props.discount && props.discount > 0 ? (
                <div className="flex justify-end items-center text-small gap-1 align-middle">
                    <span className="bg-warning-400 rounded-[3px] text-neutral-white px-0.5 ">-{props.discount}%</span>
                    <del className={`text-neutral-700 text-small`}>{currencyMap[props.currency]}{props.actualPrice}</del>
                </div>
            ) : null}
            <span className="text-right text-neutral-800 text-body-b align-middle">
        {currencyMap[props.currency]}{props.discount && props.discount > 0 ? props.actualPrice - (props.actualPrice * props.discount / 100) : props.actualPrice}
      </span>
        </div>
    );
}