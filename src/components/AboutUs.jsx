import { Image } from "@nextui-org/react"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  const imageRef = useRef();

  useGSAP(() => {
    gsap.fromTo(imageRef.current, 
    { scale: 0.5, opacity: 0 }, // Properti awal
    { scale: 1, opacity: 1, duration: 1,
       scrollTrigger: {
          trigger: imageRef.current, 
          start: "top 80%", // Memulai animasi saat bagian atas elemen mencapai 80% dari viewport
          toggleActions: "play none none reverse" // Mengatur tindakan saat scroll
        }
     },
     // Properti akhir
    );
  })


  return(
    <>
      <div className="bg-[#121629] flex flex-wrap px-4 sm:px-32 py-10 sm:py-20">
       
        <div className="w-full sm:w-[50%] flex flex-col justify-center px-7">
          <h1 className="font-extrabold font-montserrat text-5xl pb-6 text-white">About <span className="text-[#e16162] ">Us</span></h1>
          <p className="text-white font-poppins pb-6">At Ryn's Recipes, we believe that cooking should be an enjoyable and creative experience. Our mission is to inspire home cooks of all skill levels to explore the joys of cooking with delicious, easy-to-follow recipes that bring excitement to the kitchen and smiles to the dining table.</p>
        </div> 
        <div className="flex mx-auto">
          <div className="absolute p-36 sm:p-52 rounded-full bg-[#e16162] z-30"></div>
          <Image ref={imageRef} src="/assets/about.png" alt="About" className="w-[300px] sm:w-[500px] z-40"/>
        </div>
      </div>
    </>
  )
}