import HomeIcon from "../../../../icons/navBar/Home";
import { IconNavBarProps } from "../../../../icons/navBar/iconNavBar";
import IngredientsIcon from "../../../../icons/navBar/Ingredients";
import RecipesIcon from "../../../../icons/navBar/Recipes";
import VideosIcon from "../../../../icons/navBar/Videos";
import TextIcon from "./TextIcon";
import React from "react";


const navBarItems: { icon: React.ElementType<IconNavBarProps>, name: string }[] = [
  { icon: HomeIcon, name: "Home" },
  { icon: IngredientsIcon, name: "Ingredients" },
  { icon: RecipesIcon, name: "Recipes" },
  { icon: VideosIcon, name: "Videos" },
];




export default function NavBar() {
  const [currentPage, setCurrentPage] = React.useState(0);
  return (
    <footer className="h-[90px] flex gap-[8px] w-full justify-evenly items-center px-[8px] shadow-footer overflow-x-hidden bg-neutral-white">
      {navBarItems.map(({ icon, name }, index) => (
        <TextIcon key={name} icon={icon} name={name} selected={currentPage === index} onClick={()=>{setCurrentPage(index)}}/>
      ))}
    </footer>
  );
}
