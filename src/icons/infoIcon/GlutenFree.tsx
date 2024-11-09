import { InfoIconCardProps } from "./infoIconCard";
import GlutenFreeGreen from "./GlutenFree-p100.png";
import GlutenFreeWhite from "./GlutenFree-white.png";


export default function GlutenFree({ selected  }: InfoIconCardProps) {
    const image = selected ? GlutenFreeGreen : GlutenFreeWhite;

    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <image href={image} width="13" height="13" />
        </svg>
    );
}
