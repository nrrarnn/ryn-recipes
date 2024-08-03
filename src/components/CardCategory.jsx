import { Card, CardFooter, Image } from "@nextui-org/react"
import { Link } from "react-router-dom"

export const CardCategory = ({title,img}) => {
  return(
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none max-w-[150px] max-h-[150px]"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={img}
        width={200}
      />
      <CardFooter className="justify-center overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 bg-[#e16162]">
        <Link className="text-slate-50 font-semibold" to={`/category/${title}`}>{title}</Link>
      </CardFooter>
    </Card>
  )
}