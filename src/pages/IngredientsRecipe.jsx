import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../services/axiosInstance";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

const IngredientsRecipe = () => {
  const { id } = useParams();
  const [ingredientsRecipe, setIngredientsRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axiosInstance.get(`lookup.php?i=${id}`);
        setIngredientsRecipe(response.data.meals[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const getIngredients = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const ingredients = ingredientsRecipe ? getIngredients(ingredientsRecipe) : [];

  return (
    <>
      {ingredientsRecipe && (
        <div className="bg-[#212538] text-white h-full py-8">
          <div className="p-8 flex flex-col sm:flex-row">
          <div className="w-[400px] rounded-xl">
          <img src={ingredientsRecipe.strMealThumb} alt={ingredientsRecipe.strMeal} className="rounded-xl" />
          </div>
          <div>
          <h1 className="font-bold text-3xl px-10">{ingredientsRecipe.strMeal}</h1>
         
          <h2 className="font-semibold py-3 px-10">Ingredients</h2>
          <ol className="px-12 list-decimal">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ol>
          </div>
          </div>
           <p className="px-8">{ingredientsRecipe.strInstructions}</p>
           <Button className="px-8 mx-8 my-7 bg-[#e16162] text-white font-bold"><Link to={'/recipes'}>Back</Link></Button>
        </div>
      )}
    </>
  );
};

export default IngredientsRecipe;
