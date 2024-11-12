import CheckBox from "../checkBox/CheckBox";

interface CheckBoxItemProps {
    title: string;
}

const CheckBoxItem: React.FC<CheckBoxItemProps> = ({ title }) => {
    return (
        <div className="min-w-[100px] h-[22px] gap-[6px] flex items-center text-left">
            <CheckBox/>
            <span className="h-auto w-full text-label-s text-neutral-800 overflow-hidden text-ellipsis"
            style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
              }}>{title}</span>
        </div>
    );
};

export default CheckBoxItem;