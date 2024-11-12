import CloseIcon from "../../../icons/searchBar/CloseIcon";

interface SearchBarChipProps {
  title: string;
  onClose: () => void;
}

export default function SearchBarChip({ title, onClose }: SearchBarChipProps) {
  return (
    <div className="bg-primary-300 flex flex-row items-center h-full text-neutral-white rounded-full px-2 py-1 text-body">
      {title}
      <CloseIcon onClick={onClose} className="w-4 h-4 ml-2" />
    </div>
  );
}
