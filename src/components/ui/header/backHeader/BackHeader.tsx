import BackArrow from "../../../../icons/header/BackArrow";

interface BackHeaderProps {
    title: string;
    onBack: () => void;
}

const BackHeader: React.FC<BackHeaderProps> = ({ title, onBack }) => {
    return (
        <div className="w-[390px] h-[90px] px-[16px] py-[8px] shadow-top flex items-end justify-center shadow-header">
            <div className="relative flex items-center w-full h-[48px]">
                <div className="absolute left-0 flex items-center justify-start cursor-pointer w-[30px] h-[30px]" onClick={onBack}>
                    <BackArrow />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex align-middle">
                    <p className="text-h4 text-neutral-800">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default BackHeader;