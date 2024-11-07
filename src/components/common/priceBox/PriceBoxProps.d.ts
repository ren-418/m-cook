import { SupportedCurrencies } from "../../ui/footer/checkoutFooter/checkoutFooterProps";

type PriceBoxProps = {
  currency: SupportedCurrencies;
  actualPrice: number;
  discount: number;
  inline?: boolean;
}

export { PriceBoxProps };
