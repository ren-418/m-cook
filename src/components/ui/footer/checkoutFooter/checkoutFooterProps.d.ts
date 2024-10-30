
export type CheckoutFooterProps = {
  label: SupportedLabels;
  total: number;
  currency: SupportedCurrencies;
  callToAction: SupportedCallToAction;
  onSubmit: () => void;
};


export type SupportedLabels = "Total" | "Subtotal";
export type SupportedCurrencies = "USD" | "EUR" | "ARS" | "GBP";
export type SupportedCallToAction = "Checkout" | "Pay Now";
