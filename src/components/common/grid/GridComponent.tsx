interface gridComponentProps{
    children: React.ReactNode;
}

const GridComponent: React.FC<gridComponentProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-2 gap-[8px]">
            {children}
        </div>
    );
};
export default GridComponent;