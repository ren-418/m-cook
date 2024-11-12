import { useState } from "react";
import MicrophoneIcon from "../../../icons/searchBar/microphoneIcon";
import SearchIcon from "../../../icons/searchBar/searchIcon";
import SelectorIcon from "../../../icons/searchBar/SelectorIcon";
import SmallProductCard from "../../cards/smallProductCard/SmallProductCard";
import SearchBarChip from "./SearchBarChip";

type SearchBarProps = {
    isSelector: boolean;
    placeholder: string;
}

export default function SearchBar(props: SearchBarProps) {
    const [isOpened, setIsOpened] = useState(false);
    const [playBottomTransition, setPlayBottomTransition] = useState(isOpened);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const productCards = Array(16).fill({
        imageUrl: 'https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        productName: 'Product',
    });

    function toggleIsOpened() {
        if (isOpened) {
            setPlayBottomTransition(!isOpened);
            setTimeout(() => setIsOpened(!isOpened), 500);
            return;
        }
        setIsOpened(!isOpened);
        setTimeout(() => setPlayBottomTransition(!isOpened), 500);
    }

    function addSmallProductCard(name: string) {
        setSelectedItems([...selectedItems, name]);
    }

    function removeSmallProductCard(index: number) {
        setSelectedItems(selectedItems.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className={`w-full flex flex-row p-1 gap-1 shadow-card bg-neutral-white mt-[16px] ${props.isSelector && isOpened ? "rounded-t-[28px]" : "rounded-full"} transition-all duration-500 items-center`}>
                <SearchIcon />
                {selectedItems.length === 0 && (
                    <input
                        type="text"
                        placeholder={props.placeholder}
                        className="w-full bg-transparent h-min placeholder-neutral-800 text-body focus:outline-none"
                    />
                )}
                {selectedItems.length > 0 && (
                    <div className="flex flex-wrap w-full gap-0.5">
                        {selectedItems.map((item, index) => (
                            <SearchBarChip
                                title={item}
                                key={index}
                                onClose={() => removeSmallProductCard(index)}
                            />
                        ))}
                    </div>
                )}
                {!props.isSelector ? (
                    <MicrophoneIcon />
                ) : (
                    <SelectorIcon
                        onClick={toggleIsOpened}
                        className={`transform ${isOpened ? '' : 'rotate-180'} duration-[400ms] transition-all`}
                    />
                )}
            </div>
            {props.isSelector && (
                <section className={`w-full h-full grid scrollbar-hide grid-cols-2 gap-2 rounded-b-[28px] shadow-card place-items-center overflow-y-auto transition-max-height duration-500 ease-out ${playBottomTransition ? 'max-h-96 py-6' : 'p-0 max-h-0'}`}>
                    {productCards.map((product, index) => (
                        <SmallProductCard
                            onClick={() => addSmallProductCard(product.productName)}
                            key={index}
                            {...product}
                        />
                    ))}
                </section>
            )}
        </>
    );
}