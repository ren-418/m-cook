import { IconNavBarProps } from "../../../icons/navBar/iconNavBar";

type TextIconProps = {
  icon: React.ElementType<IconNavBarProps>;
  name: string;
  selected: boolean;
};



export default function TextIcon({ icon: Icon, name, selected }: TextIconProps) {
  return (
    <button className="flex flex-col gap-1 h-full items-center pt-3 pb-4 justify-evenly w-full">
      <div className={`${selected ? "w-16" : "w-8"} h-8 flex justify-evenly`}>
        <Icon isFilled={selected} />
      </div>
      <h4 className={`text-small ${selected ? "font-bold text-primary-500" : "text-neutral-800"}`}>{name}</h4>
    </button>
  );
}
