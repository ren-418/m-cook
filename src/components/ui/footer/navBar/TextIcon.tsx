import { IconNavBarProps } from "../../../../icons/navBar/iconNavBar";

type TextIconProps = {
  icon: React.ElementType<IconNavBarProps>;
  name: string;
  selected: boolean;
  onClick: () => void;
};



export default function TextIcon({ icon: Icon, name, selected, onClick }: TextIconProps) {
  return (
    <button className="flex flex-col gap-[4px] h-full items-center justify-start w-full pt-[12px] pb-[16px]" onClick={onClick}>
      <div className={`h-[32px] w-[32px] flex justify-center items-center`}>
        <Icon isFilled={selected} />
      </div>
      <p className={`${selected ? "text-primary-500 text-small-b" : "text-neutral-800 text-small"}`}>{name}</p>
    </button>
  );
}
