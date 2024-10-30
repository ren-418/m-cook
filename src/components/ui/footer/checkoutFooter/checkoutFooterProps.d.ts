
export type CheckoutFooterProps = {
  label: SupportedLabels;
  total: number;
  currency: SupportedCurrencies;
  callToAction: string;
  onSubmit: () => void;
};


export type SupportedLabels = "Total" | "Subtotal";
export type SupportedCurrencies = "USD" | "EUR" | "ARS" | "GBP";
