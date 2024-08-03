import { useEffect, useState } from "react"
import { axiosInstance } from "../services/axiosInstance"
import { CardCategory } from "./CardCategory";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const CategoryRecipes = () => {
  const [listCategories, setListCategories] = useState([]);
  const getCategory = async () => {
    try{
      const response = await axiosInstance.get('categories.php')
      setListCategories(response.data.categories)
    } catch(error) {
      console.log(error)
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots:false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots:false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  useEffect(() => {
    getCategory()
  })
  return(
    <>
      <div className="section">
        <h1 className="font-semibold text-2xl text-slate-100 px-10 sm:px-40 py-8 font-montserrat">Choose from popular categories</h1>
        <div className="w-3/4 m-auto">
          <Slider {...settings}>
            {listCategories.map((category) => (
              <CardCategory key={category.idCategory} title={category.strCategory} img={category.strCategoryThumb} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}