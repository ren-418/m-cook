import NavBar from "./NavBar";

export default {
  title: "Footer/NavBar",
  component: NavBar,
};


export const Home = {
  args: {
    currentPage: 0,
  },
}

export const Ingredients = {
  args: {
    currentPage: 1,
  },
}

export const Recipes = {
  args: {
    currentPage: 2,
  },
}

export const About = {
  args: {
    currentPage: 3,
  },
}
