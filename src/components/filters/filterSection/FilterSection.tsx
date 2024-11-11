import Filter from "../../../icons/filter/Filter";
import DownArrow from "../../../icons/filter/DownArrow";

interface FilterSectionProps {
    onOrderBy?: () => void;
    onFilter?: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({onOrderBy=()=>{}, onFilter=()=>{} }) => {
    return (
        <div className="flex items-center justify-between w-full h-[20px]">
            <div className="flex align-middle cursor-pointer" onClick={onOrderBy}>
                <p className="select-none text-[14px] text-neutral-800 text-body-b mr-2">Order by</p>
                <DownArrow />
            </div>
            <div className="flex align-middle cursor-pointer" onClick={onFilter}>
                <p className="select-none text-body-b mr-3 text-neutral-800">Filter</p>
                <div>
                    <Filter />
                </div>
            </div>
        </div>
    );
};

export default FilterSection;