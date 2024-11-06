interface ReelCardProps {
    imageUrl: string;
    title: string;
    onClick: () => void
}

const ReelCard: React.FC<ReelCardProps> = ({ imageUrl, title, onClick = () => {} }) => {
    return (
        <button className="w-[126px] h-[187px] shadow-card rounded-[12px] relative"
             style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
             onClick={onClick}>
            <div className="h-[40%] w-full absolute bottom-0 rounded-b-[12px]" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))' }}>
                <p className="select-none text-left text-neutral-white text-small px-[11px] h-[30px] line-clamp-2 absolute bottom-3">
                    {title}</p>
            </div>
        </button>
    );
};

export default ReelCard;