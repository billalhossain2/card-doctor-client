import "./Navbar.css"
import logo from "../../../assets/Logo.svg";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isShow, setIsShow] = useState(false)
  const handleShow = ()=>{
    setIsShow(!isShow)
  }
  return (
    <div className="flex justify-between lg:items-center my-10">
      <div>
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <ul className="md:flex hidden items-center  gap-8">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><button className="border-[1px] border-solid border-[#FF3811] rounded-md text-[#FF3811] px-5 py-2">Appointment</button></li>
      </ul>
      {/* mobile menu  */}
      <div className="md:hidden relative me-1">
        <div className="flex flex-col items-end">
          {
            !isShow 
            ? <FaBars onClick={handleShow} className="text-3xl cursor-pointer"></FaBars> 
            :  <ImCross onClick={handleShow} className="text-3xl cursor-pointer"></ImCross>
          }
        </div>
      {
        isShow
         && 
         <ul className="absolute z-50 right-0 flex flex-col items-end bg-[#40f18a] space-y-5 p-5">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><button className="border-[1px] border-solid border-[#FF3811] rounded-md text-[#FF3811] px-5 py-2">Appointment</button></li>
      </ul>
      }
      </div>
    </div>
  )
}

export default Navbar