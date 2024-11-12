import { InfoIconCardProps } from "./infoIconCard";

export default function Vegan({ selected }: InfoIconCardProps) {
    const fillColor = selected ? "#D1EDE8" : "white";

    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5 0.5L12.479 1.04389C12.4685 1.31933 12.1875 7.82647 9.94339 10.07C9.07399 10.9371 7.91398 11.4514 6.68747 11.5133C5.46096 11.5753 4.25501 11.1806 3.30262 10.4054L8.83285 4.87659L8.12532 4.16974L2.59509 9.69858C1.81973 8.74658 1.42471 7.54111 1.4863 6.31498C1.5479 5.08885 2.06174 3.92902 2.9286 3.05947C5.12869 0.859925 11.679 0.536992 11.9565 0.523995L12.5 0.5ZM2.59509 9.69858L0.5 11.7931L1.20703 12.5L3.30212 10.4054C3.04329 10.1942 2.80641 9.95735 2.59509 9.69858V9.69858Z"
                fill={fillColor}
            />
        </svg>
    );
}
