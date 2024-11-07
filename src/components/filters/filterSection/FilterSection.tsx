import Filter from "../../../icons/filter/Filter";
import DownArrow from "../../../icons/filter/DownArrow";

interface FilterSectionProps {
    text: string;
    onOrderBy: () => void;
    onFilter: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ text, onOrderBy, onFilter }) => {
    return (
        <div className="flex items-center justify-between w-[376px] h-[20px]" onClick={onOrderBy}>
            <div className="flex align-middle ">
                <p className="text-[14px] text-neutral-800 text-body-b mr-2">Order by</p>
                <DownArrow />
            </div>
            <div className="flex align-middle">
                <p className="text-body-b mr-3 text-neutral-800">Filter</p>
                <div onClick={onFilter}>
                    <Filter />
                </div>
            </div>
        </div>
    );
};

export default FilterSection;