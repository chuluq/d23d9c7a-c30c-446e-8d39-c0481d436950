import Home from "pages/home";
import About from "pages/about";

export const links = [
  {
    id: 1,
    name: "Movies",
    url: "/",
    component: <Home />,
  },
  {
    id: 2,
    name: "About",
    url: "/about",
    component: <About />,
  },
];
