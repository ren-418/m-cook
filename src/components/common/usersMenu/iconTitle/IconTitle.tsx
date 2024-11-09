export interface IconTitleProps {
    icon: React.ReactNode;
    title: string;
    onClick?: () => void;
}

const IconTitle: React.FC<IconTitleProps> = ({ icon, title, onClick }) => {
    return (
        <div className="flex items-center h-[48px] w-[200px] py-[8px] px-[16px]" onClick={onClick}>
            {icon}
            <p className="text-body text-neutral-800 ml-[12px]">{title}</p>
        </div>
    );
};

export default IconTitle;