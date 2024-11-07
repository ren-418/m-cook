import Button from "../../../common/button/Button";
import NumberInput from "../../../common/numberInput/numberInput";
import PriceBox from "../../../common/priceBox/PriceBox";
import { AddToCartProps } from "./AddToCartProps";
import React from "react";


export default function AddToCartFooter(props: AddToCartProps) {
  const [count, setCount] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  return (
    <footer className="shadow-footer w-full px-4 py-7 bg-neutral-white">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-neutral-dark text-label-m">{props.label}</span>
          <PriceBox currency={props.currency} actualPrice={props.actualPrice * count} discount={props.discount} />
        </div>
        <div className="flex justify-between">
          <NumberInput width={"23%"} count={count} setCount={setCount} />
          <Button variant={"solid"} size={"lg"} width={"70%"} onClick={handleClick} loading={loading} >
            <span className="text-label-s text-neutral-white ">
              Add to cart
            </span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
