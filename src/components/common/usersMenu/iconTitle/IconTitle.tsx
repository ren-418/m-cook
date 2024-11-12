export interface IconTitleProps {
    icon: React.ReactNode;
    title: string;
    onClick?: () => void;
}

const IconTitle: React.FC<IconTitleProps> = ({ icon, title, onClick }) => {
    return (
        <div className="select-none flex items-center h-[48px] w-full py-[8px] px-[16px] active:bg-neutral-100 cursor-pointer" onClick={onClick}>
            {icon}
            <p className="text-body text-neutral-800 ml-[12px]">{title}</p>
        </div>
    );
};

export default IconTitle;