interface categoryCardProps {
    imageUrl: string;
    categoryName: string;
    onClick: () => void;
  }
  
  const CategoryCard: React.FC<categoryCardProps> = ({ imageUrl, categoryName, onClick = () => {} }) => {
      return (
          <button 
              onClick={onClick} 
              className="flex items-center w-[156px] h-[60px] p-[8px] shadow-[0_0_4px_1px_rgba(0,0,0,0.1),0_0_1px_0_rgba(0,0,0,0.5)] rounded-[8px]"
          >
              <img 
                  src={imageUrl} 
                  alt={categoryName} 
                  draggable="false"
                  className="w-[40px] h-[40px] object-cover rounded-[8px]" 
              />
              <p 
                  className="select-none flex-1 flex items-center text-left text-body-b text-neutral-800 px-[8px] overflow-hidden text-ellipsis"
                  style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                  }}
              >
                  {categoryName}
              </p>
          </button>
      );
  };
  
  export default CategoryCard;
  