import { Pagination} from "@nextui-org/react";
import { axiosInstance } from "../services/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardPopularRecipes } from "./CardPopularRecipes";

export const PopularRecipes = () => {

  const [popularRecipes, setPopularRecipes] = useState([]);
  const history = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const getPopularRecipes = async () => {
    try{
      const response = await axiosInstance.get('filter.php?a=Canadian')
      setPopularRecipes(response.data.meals)
    } catch(error){
      console.log('error: ', error)
    }
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = popularRecipes.slice(indexOfFirstItem, indexOfLastItem);

  const handleCardClick = (id) => {
    history(`/recipes/${id}`)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  useEffect(() => {
    getPopularRecipes()
  },[])
  return(
    <>
      <div className="section px-6 sm:p-36 pb-44">
        <h1 className="text-white text-2xl sm:text-3xl font-bold pb-4">Popular Recipes</h1>
       <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 pb-6">
        {currentData.map((recipe) => (
          <CardPopularRecipes key={recipe.idMeal} id={recipe.idMeal} name={recipe.strMeal} image={recipe.strMealThumb} onCardClick={handleCardClick} />
      ))}
      </div>
      <Pagination total={Math.ceil(popularRecipes.length / itemsPerPage)}
        initialPage={1}
        onChange={(page) => handlePageChange(page)}
        page={currentPage} />
      </div>
    </>
  )
}