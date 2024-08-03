import {Card, CardBody, CardFooter, Image} from '@nextui-org/react'

export const CardPopularRecipes = ({id,name,image, onCardClick}) => {
  return(
    <Card shadow="sm"isPressable onPress={() => onCardClick(id)} className='ml-2'>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={name}
              className="w-full object-cover h-[140px]"
              src={image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between bg-[#3b4261]">
            <b className="text-[#fffffe]">{name}</b>
          </CardFooter>
        </Card>
  )
}