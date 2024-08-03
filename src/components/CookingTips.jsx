import { cookingTips } from "../data"

export const CookingTips = () => {
  return(
    <>
      <div className="section bg-[#121629]">
       
          <h1 className="font-extrabold text-white text-5xl text-center pb-10">Cooking <span className="text-[#e16162]">Tips</span> </h1>
        
        <div className="px-6 sm:px-40  ">
          <ul className="text-white list-disc rounded-xl bg-[#353b5b] p-10 border border-slate-500">
           {
            cookingTips.map((list) => (
              <li key={list.title}><span className="font-bold">{list.title} : </span>{list.description}</li>
            ))
           }
          </ul>
        </div>
      </div>
    </>
  )
}