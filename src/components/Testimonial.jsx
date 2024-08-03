import { testimonials } from "../data"
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

export const Testimonials = () => {
  const cardsRef = useRef([]);
 useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card, 
        { scale: 0, y: 50 }, // Properti awal
        { 
          scale: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Memulai animasi saat bagian atas kartu mencapai 80% dari viewport
            toggleActions: "play none none reverse", // Mengatur tindakan saat scroll
            // Anda bisa menambahkan delay untuk setiap kartu
            delay: index * 0.1 // Menambahkan delay untuk efek bertahap
          }
        }
      );
    });
  })
  
  return(
    <>
      <div className="section text-center font-poppins">
        <h1 className="text-white font-bold text-3xl">What They Thought About Us</h1>
          <h1 className="text-7xl text-[#e16162] italic font-bold ">"</h1>
        <div className="flex justify-center items-center gap-5 flex-col sm:flex-row">
            {
              testimonials.map((testi, index) => (
                 <Card ref={el => cardsRef.current[index] = el} className="max-w-[280px] bg-[#e16162] bg-opacity-30" key={testi.name}>
                    <CardHeader className="flex gap-1 justify-center">
                      <div className="flex flex-col justify-center items-center">
                        <h1 className="text-white font-bold text-xl">{testi.name}</h1>
                      </div>
                    </CardHeader>
                    <CardBody className="px-6 pt-4 pb-6">
                      <p className="text-white">{testi.description}</p>
                    </CardBody>
                  </Card>
              ))
            }
        </div>
      </div>
    </>
  )
}