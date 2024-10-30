
interface smallProductCardProps {
    imageUrl: string;
    productName: string;
    onClick: () => void
}

const SmallProductCard: React.FC<smallProductCardProps> = ({ imageUrl, productName, onClick }) => {
    return (
        <div className="flex items-center justify-start w-[168px] h-[56px] p-[8px] shadow-[0_0_4px_1px_rgba(0,0,0,0.1),0_0_1px_0_rgba(0,0,0,0.5)] rounded-[8px] ">
            <img src={imageUrl} alt={productName} className="w-[40px] h-[40px] object-cover rounded-[8px] "/>
            <p className="flex text-[14px] w-[100%] h-[100%] px-[8px] items-center text-body-b text-neutral-800 overflow-hidden text-ellipsis"
               style={{
                   display: '-webkit-box',
                   WebkitBoxOrient: 'vertical',
                   WebkitLineClamp: 2,
               }}
            >{productName}</p>
        </div>
    );
};

export default SmallProductCard;