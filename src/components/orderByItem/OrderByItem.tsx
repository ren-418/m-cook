import Menu from "../../icons/orderBy/Menu";

interface orderByItemProps {
    criteria: string;
    index: number;
    onClick: () => void;
}

const OrderByItem: React.FC<orderByItemProps> = ({ criteria, index, onClick }) => {
    return (
        <div className="flex items-center justify-between w-full h-[40px] p-[8px] border-b-neutral-200 border-b-[1px]" onClick={onClick}>
            <p className="select-none flex items-center justify-center text-neutral-white text-label-s bg-primary-500 rounded-full min-w-[26px] min-h-[26px]">{index + 1}</p>
            <div className="flex items-center justify-end max-w-[80%]">
                <p className="select-none flex px-[8px] max-w-[90%] items-center text-label-m text-neutral-800 overflow-hidden text-ellipsis mr-[10px"
                   style={{
                       display: '-webkit-box',
                       WebkitBoxOrient: 'vertical',
                       WebkitLineClamp: 1,
                   }}
                >{criteria}</p>
                <Menu />
            </div>
        </div>
    );
};

export default OrderByItem;