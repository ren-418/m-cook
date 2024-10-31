
interface categoryCardProps {
  imageUrl: string;
  categoryName: string;
  onClick: () => void
}

const CategoryCard: React.FC<categoryCardProps> = ({ imageUrl, categoryName, onClick }) => {
  return (
    <div className="flex items-center justify-start w-[156px] h-[60px] p-[8px] shadow-card rounded-[8px]">
      <img src={imageUrl} alt={categoryName} className="w-[40px] h-[40px] object-cover rounded-[8px]"/>
      <p className="flex text-[14px] w-[100%] h-[90%] px-[8px] items-center text-body-b text-neutral-800 overflow-hidden text-ellipsis"
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
        }}
      >{categoryName}</p>
    </div>
  );
};

export default CategoryCard;