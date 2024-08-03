import { FaHome, FaSearch } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import {  NavLink} from "react-router-dom";


export const NavigationBar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="fixed h-16 sm:h-[400px] w-[350px] sm:w-[80px] bg-[#232946] rounded-xl z-50 bottom-9 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:left-6 flex justify-center place-items-center border border-slate-600">
        <ul className="flex flex-row sm:flex-col gap-8 ">
            <NavLink to={'/'} aria-label="Home">
            {({ isActive }) => (
              <li className={`li-nav ${isActive ? 'text-slate-800' : ''}`}>
                <FaHome size={23} className={isActive ? 'text-slate-800' : ''} />
              </li>
            )}
          </NavLink>
            <NavLink to={'/recipes'} aria-label="Recipes">
            {({ isActive }) => (
              <li className={`li-nav ${isActive ? 'text-slate-800' : ''}`}>
                <FaBook size={23} className={isActive ? 'text-slate-800' : ''} />
              </li>
            )}
          </NavLink>
          <NavLink to={'/search'} aria-label="Search">
            {({ isActive }) => (
              <li className={`li-nav ${isActive ? 'text-slate-800' : ''}`}>
                <FaSearch size={23} className={isActive ? 'text-slate-800' : ''} />
              </li>
            )}
          </NavLink>
          <NavLink to={'/contact'} aria-label="contact">
            {({ isActive }) => (
              <li className={`li-nav ${isActive ? 'text-slate-800' : ''}`}>
                <IoMdContacts size={23} className={isActive ? 'text-slate-800' : ''} />
              </li>
            )}
          </NavLink> 
        </ul>
      </div>
    </div>
  );
}
