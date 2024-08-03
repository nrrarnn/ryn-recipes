import { Link } from "react-router-dom"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const HeroSection = () => {
  const container = useRef();
  const textRef = useRef()
    useGSAP(() => {
      gsap.to(textRef.current, {
        duration: 6,
        text: {
          value: "Master Your Favorite Dishes",
          delimiter: "",
          ease: "none"
        }
      });
    }, { scope: container });
  return(
    <>
     <div className="relative flex justify-center items-center h-screen font-poppins" ref={container}>
      <img src="/src/assets/bg-food3.jpg" className="w-full h-full object-cover absolute inset-0 z-0" alt="Background" />
      <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
      <div className="relative z-20 p-6 text-white">
        <h1 className="text-3xl tracking-tight font-montserrat font-extrabold text-white sm:text-4xl md:text-5xl w-full max-w-[600px] text-center">
          <span className="block">Quick & Easy Cooking:</span>
          <span ref={textRef} className="block text-[#e16162] "> </span>
        </h1>
          <p className="mt-3 max-w-md mx-auto text-base font-montserrat text-white sm:text-lg md:mt-5 md:text-xl md:max-w-2xl text-center">
              discover 1000+ recipes in your hand with the best recipe. Help you to find the easist way to cook
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow px-6">
              <Link to={'/recipes'} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#e16162] hover:bg-red-800 md:py-4 md:text-lg md:px-10" aria-label="Explore Recipes">Explore Recipes</Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}