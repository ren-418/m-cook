interface gridComponentProps{
    children: React.ReactNode;
}

const GridComponent: React.FC<gridComponentProps> = ({ children }) => {
    return (
        <div className="items-center justify-items-center h-full w-full overflow-y-auto grid grid-cols-2 gap-[8px] px-[16px] pt-[1px] pb-[16px]">
            {children}
        </div>
    );
};
export default GridComponent;