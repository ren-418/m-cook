import { useState } from "react";
import Button from "../../../common/button/Button";
import { CheckoutFooterProps } from "./checkoutFooterProps";
import { currencyMap } from "./currencyMap";


export default function CheckoutFooter(props: CheckoutFooterProps) {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onClick(): void {
    props.onSubmit();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }




  return (
    <footer className="flex flex-col w-full justify-center h-min items-center px-4 py-7 gap-4 shadow-footer">
      <div className="flex flex-row justify-between w-full items-center text-neutral-800 text-label-m">
        <div>{props.label}</div>
        <div>{`${currencyMap[props.currency]}${props.total}`}</div>
      </div>
      <Button variant={"solid"} size={"lg"} width={"100%"} onClick={onClick} loading={isLoading}>
        <span className="text-label-s text-neutral-white ">
          {props.callToAction}
        </span>
      </Button>
    </footer>
  );
}


