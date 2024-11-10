import MicrophoneIcon from "../../../icons/searchBar/microphoneIcon";
import SearchIcon from "../../../icons/searchBar/searchIcon";
import SelectorIcon from "../../../icons/searchBar/SelectorIcon";
import SmallProductCard from "../../cards/smallProductCard/SmallProductCard";

type SearchBarProps = {
  isSelector: boolean;
  placeholder: string;

}


export default function SeachBar(props: SearchBarProps) {
  const productCards = Array(16).fill({
    imageUrl: 'https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    productName: 'Product Name',
  });
  return (
    <>
      <search className={`w-full flex flex-row p-1 g-1 shadow-card ${props.isSelector ? "rounded-t-[28px]" : "rounded-full"} items-center`}>
        <SearchIcon />
        <input type="text" placeholder={props.placeholder}
          className="w-full bg-transparent h-min placeholder-neutral-800 text-body focus:outline-none" />
        {!props.isSelector ? <MicrophoneIcon /> : <SelectorIcon />}
      </search>
      {
        props.isSelector &&
        <section className="w-full h-full grid  grid-cols-2 py-6 gap-2 rounded-b-[28px] shadow-card place-items-center overflow-hidden">
          {productCards.map((product, index) => <SmallProductCard key={index} {...product} />)}
        </section>
      }
    </>

  );

}
