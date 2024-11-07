import { SupportedCurrencies } from "../checkoutFooter/checkoutFooterProps";

export type AddToCartProps = {
  label: SupportedLabels;
  currency: SupportedCurrencies;
  actualPrice: number;
  discount: number;
}


export type SupportedLabels = "Total" | "Subtotal";
