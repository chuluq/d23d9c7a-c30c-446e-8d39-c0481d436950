import Movies from "pages/movies";
import MovieDetails from "pages/movies/details";
import About from "pages/about";

export const links = [
  {
    id: 1,
    name: "Movies",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
];

export const routes = [
  {
    id: 1,
    name: "Movies",
    url: "/",
    component: <Movies />,
  },
  {
    id: 2,
    name: "Movie Details",
    url: "/movies/:id",
    component: <MovieDetails />,
  },
  {
    id: 3,
    name: "About",
    url: "/about",
    component: <About />,
  },
];
