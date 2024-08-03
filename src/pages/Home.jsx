import { HeaderNav } from "../components/HeaderNav"
import { HeroSection } from "../components/HeroSection";
import { NavigationBar } from "../components/NavigationBar";
import { AboutUs } from "../components/AboutUs";
import { Offer } from "../components/Offers";
import { CookingTips } from "../components/CookingTips";
import { Testimonials } from "../components/Testimonial";
import { FooterHome } from "../components/FooterHome";


const Home = () => {
  return(
    <>
      <HeaderNav/>
      <NavigationBar/>
      <HeroSection/>
      <AboutUs/>
      <Offer/>
      <CookingTips/>
      <Testimonials/>
      <FooterHome/>
    </>
  )
}

export default Home;