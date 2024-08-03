import { Button, Input, Pagination } from "@nextui-org/react"
import { IoSearchOutline } from "react-icons/io5";
import { HeaderNav } from "../components/HeaderNav";
import { NavigationBar } from "../components/NavigationBar";
import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axiosInstance";
import { CardPopularRecipes } from "../components/CardPopularRecipes";
import { useNavigate } from "react-router-dom";


const SearchRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [valueSearch, setValueSearch] = useState("");
  const [recipesBySearch, setRecipesBySearch] = useState([]);
  const [hasSearched, setHasSearched] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const history = useNavigate()


  const getSearchRecipes = async () => {
    try{
      if (valueSearch.trim() === "") {
        setRecipesBySearch([]);
        return;
      }
      const response = await axiosInstance.get(`search.php?s=${valueSearch}`)
      setRecipesBySearch(response.data.meals || [])
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

  };

  const handleKeyPress = () => {
      setValueSearch(searchTerm);
      setHasSearched(true)
  }

  const handleCardClick = (id) => {
    history(`/recipes/${id}`)
  }

  const handleClear = () => {
    setSearchTerm("");
    setRecipesBySearch([]);
    setHasSearched(false);
    setCurrentPage(1)
  };

  const handlePageChange = (page) => {
    if(recipesBySearch.length > 0) {
      setCurrentPage(page);
    } 
    
  };

  useEffect(() => {
    if (hasSearched) {
      getSearchRecipes();
    }
  },[valueSearch]);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = recipesBySearch.slice(indexOfFirstItem, indexOfLastItem);

  return(
    <>
      <HeaderNav/>
      <NavigationBar/>
      <div className={`w-full h-[1500px] bg-gradient-to-tr from-[#212538] to-slate-700 text-white`}>
        <div className="h-[350px] px-10 sm:px-56 flex flex-row justify-center items-center">
      <Input
        value={searchTerm}
        onChange={handleInputChange}
        isClearable
        onClear={handleClear}
        radius="lg"
        classNames={{
          input: [
            "text-white",
            "placeholder:text-white",
            "py-8"
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default/70",
            "group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <IoSearchOutline className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Button onClick={() => handleKeyPress()} className="bg-[#e16162] text-white font-semibold">Cari</Button>
        </div>
        <div>
            <div className={`${recipesBySearch.length > 0 ? 'grid grid-cols-2 sm:grid-cols-4 px-4' : ''} sm:px-32 py-7 gap-5 justify-center items-center`}>
     
        { 
            recipesBySearch.length > 0 ? ( 
            
            currentData.map((recipe) => (
              <CardPopularRecipes key={recipe.idMeal} id={recipe.idMeal} name={recipe.strMeal.slice(0,20)} image={recipe.strMealThumb} onCardClick={handleCardClick}/>
            )) 
            
          ) : (
            hasSearched && <p className="flex justify-center items-center"> No result found.</p>
          )
        }
     </div>
     {
       recipesBySearch.length > 0 ? (
        <Pagination total={Math.ceil(recipesBySearch.length / itemsPerPage)}
              initialPage={1}
              onChange={(page) => handlePageChange(page)}
              page={currentPage} className="px-6 sm:px-36" />
       ) : (
        ''
       )
     }
            
          </div>
    </div>
    </>
  )
}

export default SearchRecipes