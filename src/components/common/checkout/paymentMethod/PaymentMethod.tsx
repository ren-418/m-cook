import {useState} from "react";
import DownArrow from "../../../../icons/input/DownArrow";

export default function PaymentMethod() {
  const paymentOptions = ['Mercado Pago', 'Tarjeta de crédito', 'Efectivo'];
  const [selectedOption, setSelectedOption] = useState(paymentOptions[0]);

  const onChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
      <div className="bg-neutral-white p-4">
        <div className="flex items-center bg-neutral-white">
          <label
              htmlFor="payment-method"
              className="text-neutral-black font-medium mr-12"
          >
            Payment method
          </label>
          <div className="relative">
            <select
                id="payment-method"
                className="text-center bg-neutral-100 rounded-[16px] px-[24px] py-[4px] text-neutral-800 font-bold focus:outline-none cursor-pointer appearance-none pr-[30px]"
                value={selectedOption}
                onChange={(e) => onChange(e.target.value)}
            >
              {paymentOptions.map((option) => (
                  <option key={option} value={option} className="text-center">
                    {option}
                  </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 px-[8px] py-[6px] flex items-center text-neutral-800">
              <DownArrow className="w-5 h-9"/>
            </div>
          </div>
        </div>
      </div>
  );
};