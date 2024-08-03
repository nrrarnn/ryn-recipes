import { CategoryRecipes } from "../components/CategoryRecipes"
import { HeaderNav } from "../components/HeaderNav"
import { NavigationBar } from "../components/NavigationBar"
import { PopularRecipes } from "../components/PopularRecipes"

const Recipes = () => {
  return(
    <>
      <HeaderNav/>
      <NavigationBar/>
      <CategoryRecipes/>
      <PopularRecipes/>
    </>
  )
}

export default Recipes;