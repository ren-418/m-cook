import Menu from "../../icons/orderBy/Menu";

interface orderByItemProps {
    criteria: string;
    index: number;
    onClick: () => void;
}

const OrderByItem: React.FC<orderByItemProps> = ({ criteria, index, onClick }) => {
    return (
        <div className="flex items-center justify-between w-[349px] h-[43px] p-[8px] shadow-bottom " onClick={onClick}>
            <p className="flex items-center justify-center text-[14px] text-neutral-white text-label-s bg-primary-500 rounded-full w-[26px] h-[26px]">{index + 1}</p>
            <div className="flex items-center ml-auto">
                <p className="flex text-[14px] px-[8px] items-center text-body-b text-neutral-800 overflow-hidden text-ellipsis"
                   style={{
                       display: '-webkit-box',
                       WebkitBoxOrient: 'vertical',
                       WebkitLineClamp: 2,
                   }}
                >{criteria}</p>
                <Menu />
            </div>
        </div>
    );
};

export default OrderByItem;