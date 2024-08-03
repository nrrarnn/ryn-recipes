import { ContactForm } from "../components/ContactForm"
import { HeaderNav } from "../components/HeaderNav"
import { NavigationBar } from "../components/NavigationBar"



const GetInTouch = () => {
  return(
    <>  
      <HeaderNav/>
      <NavigationBar/>
      <div className="section bg-[#212538] h-screen text-white">
        <h1 className="text-center font-bold py-9 text-4xl">Get In Touch</h1>
        <p className="px-6 sm:px-32 text-center">We would love to hear from you! If you have any questions, suggestions, or feedback about our recipes, feel free to reach out.</p>
        <div>
          <ContactForm/>
        </div>
      </div>
    </>
  )
}

export default GetInTouch;