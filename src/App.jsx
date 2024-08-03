import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import {Spinner } from "@nextui-org/react";

const Home = lazy(() => import("./pages/Home"));
const Recipes = lazy(() => import("./pages/Recipes"));
const IngredientsRecipe = lazy(() => import("./pages/IngredientsRecipe"));
const RecipesByCategory = lazy(() => import("./pages/RecipesByCategory"));
const SearchRecipes = lazy(() => import("./pages/Search"));
const GetInTouch = lazy(() => import("./pages/GetInTouch"));


export default function App() {
  
  return (
    <Suspense fallback={ <div className="loader"><Spinner color="primary" /></div> }>
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<Recipes/>} path="/recipes" />
      <Route element={<IngredientsRecipe/>} path="/recipes/:id" />
      <Route element={<RecipesByCategory/>} path="/category/:category" />
      <Route element={<SearchRecipes/>} path="/search" />
      <Route element={<GetInTouch/>} path="/contact" />
    </Routes>
   </Suspense>
  );
}
