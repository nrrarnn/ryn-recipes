import { Link, useNavigate, useParams } from "react-router-dom"
import { axiosInstance } from "../services/axiosInstance"
import { useEffect, useState } from "react"
import { CardPopularRecipes } from "../components/CardPopularRecipes";
import { NavigationBar } from "../components/NavigationBar";
import { HeaderNav } from "../components/HeaderNav";
import { Button, Pagination, Skeleton } from "@nextui-org/react";

const RecipesByCategory = () => {
  const {category} = useParams();
  const navigate = useNavigate();
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [loading, setLoading] = useState(true);

  const getRecipesByCategory = async () => {
  try {
    const response = await axiosInstance.get(`filter.php?c=${category}`);
    setRecipesByCategory(response.data.meals);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false)
  }
};

  const handleCardClick = (id) => {
    navigate(`/recipes/${id}`)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getRecipesByCategory()
  },[category])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = recipesByCategory.slice(indexOfFirstItem, indexOfLastItem);

  return(
    <>
      <NavigationBar/>
      <HeaderNav/>
      <div className="section px-8 sm:px-44 py-32">
        <div className="flex flex-row justify-between">
          <h1 className="text-white text-4xl font-bold py-7">Recipes By {category}</h1>
          <Button className="bg-[#e16162] text-white font-semibold"><Link to={'/recipes'}>Back</Link></Button>
        </div>
        <div className="grid-card">
        {loading ? (
            <>
              <Skeleton height={200} className="mb-4" />
              <Skeleton height={200} className="mb-4" />
              <Skeleton height={200} className="mb-4" />
              <Skeleton height={200} className="mb-4" />
            </>
        ) : (currentData.map((recipe) => (
          <CardPopularRecipes 
            key={recipe.idMeal} 
            id={recipe.idMeal} 
            name={recipe.strMeal.slice(0,20)} 
            image={recipe.strMealThumb} 
            onCardClick={handleCardClick} 
          />
        ))
) 
        }
        </div>
        <Pagination total={Math.ceil(recipesByCategory.length / itemsPerPage)}
        initialPage={1}
        onChange={(page) => handlePageChange(page)}
        page={currentPage} />
      
  </div>
    </>
  )
}

export default RecipesByCategory;