import {useState} from "react";

export default function PaymentMethod() {
  const paymentOptions = ['Mercado Pago', 'Paypal', 'Stripe'];
  const [selectedOption, setSelectedOption] = useState(paymentOptions[0]);

    const onChange = (value: string) => {
        setSelectedOption(value);
    };

  return (
    <div>
      <div className="flex items-center bg-neutral-white">
        <label
          htmlFor="payment-method"
          className="text-neutral-black font-medium mr-[10px]"
        >
          Payment method
        </label>
          <select
            id="payment-method"
            className="bg-neutral-100 rounded-[16px] px-[8px] py-[4px] text-neutral-800 font-medium focus:outline-none cursor-pointer"
            value={selectedOption}
            onChange={(e) => onChange(e.target.value)}
          >
            {paymentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
      </div>
    </div>
  );
};
