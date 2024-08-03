import { Card, CardBody,CardHeader} from "@nextui-org/react"
import { offers } from "../data"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger);

export const Offer = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 }, // Properti awal
        { 
          opacity: 1, 
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
      <div className="section bg-[#212538] font-montserrat">
        <div className="w-full px-7">
          <h1 className="text-[#e16162] font-extrabold text-5xl text-center">What We Offer</h1>
        </div>
        <div className="w-full flex flex-col sm:flex-row px-8 gap-5 justify-center items-center py-20">
          { offers.map((offer, index) => (
            <Card className="max-w-[300px] bg-[#353b5b] text-white p-4 border border-slate-500" key={offer.id} ref={el => cardsRef.current[index] = el}>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-lg font-bold">{offer.title}</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>{offer.description}</p>
              </CardBody>
            </Card>
            ))  
          }
        </div>
      </div>
    </>
  )
}