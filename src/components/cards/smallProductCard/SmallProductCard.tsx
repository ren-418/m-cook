
interface smallProductCardProps {
  imageUrl: string;
  productName: string;
  onClick?: () => void
}

const SmallProductCard: React.FC<smallProductCardProps> = ({ imageUrl, productName, onClick = () => {} }) => {
    return (
        <button onClick={onClick} className="flex bg-neutral-white items-center justify-start w-[168px] h-[56px] p-[8px] shadow-[0_0_4px_1px_rgba(0,0,0,0.1),0_0_1px_0_rgba(0,0,0,0.5)] rounded-[12px] ">
            <img 
            src={imageUrl} 
            alt={productName} 
            className="w-[40px] h-[40px] object-cover rounded-[8px] "
            draggable="false"/>
            <p className="flex-1 flex items-center text-left select-none px-[8px] text-body-b text-neutral-800 overflow-hidden text-ellipsis"
               style={{
                   display: '-webkit-box',
                   WebkitBoxOrient: 'vertical',
                   WebkitLineClamp: 2,
               }}
            >{productName}</p>
        </button>
    );
};

export default SmallProductCard;
