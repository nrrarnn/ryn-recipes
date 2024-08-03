import { Divider } from "@nextui-org/react"
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const FooterHome = () => {
  return(
    <>
      <footer className="section text-white px-6 sm:px-36 bg-[#121629]">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between lg:items-center">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>Email: <a href="mailto:contact@rynrecipes.com" className="text-slate-300">contact@rynrecipes.com</a></p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Recipe Lane, Food City, FC 12345</p>
          </div>
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-slate-300 hover:underline">Home</a></li>
              <li><a href="/recipes" className="text-slate-300 hover:underline">Recipes</a></li>
              <li><a href="/search" className="text-slate-300 hover:underline">Search</a></li>
              <li><a href="/contact" className="text-slate-300 hover:underline">Contact</a></li>
              <li><a href="/about" className="text-slate-300 hover:underline">About Us</a></li>
            </ul>
          </div>
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="https://instagram.com/nrrarn_" aria-label="View Instagram" className="text-slate-300 hover:underline"><FaInstagram/></a></li>
              <li><a href="https://github.com/nrrarnn"aria-label="View Github" className="text-slate-300 hover:underline"><FaGithub/></a></li>
              <li><a href="https://twitter.com/ryncode" aria-label="View Twitter" className="text-slate-300 hover:underline"><FaSquareXTwitter/></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <Divider className="bg-slate-600 my-7"/>
          <p>© 2024 Ryn's Recipes. All rights reserved.</p>
          <p>
            <a href="/privacy-policy" className="text-slate-300 hover:underline">Privacy Policy</a> | 
            <a href="/terms-of-service" className="text-slate-300 hover:underline">Terms of Service</a>
          </p>
        </div>
    </footer>
    </>
  )
}