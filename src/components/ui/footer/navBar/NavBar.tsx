import HomeIcon from "../../../../icons/navBar/Home";
import { IconNavBarProps } from "../../../../icons/navBar/iconNavBar";
import IngredientsIcon from "../../../../icons/navBar/Ingredients";
import RecipesIcon from "../../../../icons/navBar/Recipes";
import VideosIcon from "../../../../icons/navBar/Videos";
import { NavBarProps } from "./navBarProps";
import TextIcon from "./TextIcon";


const navBarItems: { icon: React.ElementType<IconNavBarProps>, name: string }[] = [
  { icon: HomeIcon, name: "Home" },
  { icon: IngredientsIcon, name: "Ingredients" },
  { icon: RecipesIcon, name: "Recipes" },
  { icon: VideosIcon, name: "Videos" },
];




export default function NavBar({ currentPage = 0 }: NavBarProps) {
  return (
    <footer className="flex gap-2 w-full pb-3 justify-evenly items-center  px-2 shadow-xl overflow-x-hidden ">
      {navBarItems.map(({ icon, name }, index) => (
        <TextIcon key={name} icon={icon} name={name} selected={currentPage === index} />
      ))}
    </footer>
  );
}
