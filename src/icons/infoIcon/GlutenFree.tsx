import { InfoIconCardProps } from "./infoIconCard";

export default function GlutenFree({ selected = false }: InfoIconCardProps) {
    const fillColor = selected ? "#D1EDE8" : "white";

    return(
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" fill={fillColor}/>
        </svg>
);
}
