import { createBrowserRouter } from "react-router";
import MainLayout from "../components/templates/MainLayout";
import Home from "../pages/home";
import About from "../pages/about";
import ListMovies from "../pages/listmovies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: "/about",
    element: <MainLayout><About /></MainLayout>,
  },
  {
    path: "/movies",
    element: <MainLayout><ListMovies /></MainLayout>,
  },
]);
