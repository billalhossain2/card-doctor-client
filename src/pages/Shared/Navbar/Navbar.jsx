import "./Navbar.css";
import logo from "../../../assets/Logo.svg";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsHandbag } from "react-icons/bs";
import { useContext, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  const { user, logOutUser } = useContext(userContext);
  const handleLogouUser = () => {
    logOutUser()
      .then(() => Swal.fire("Successfully logged out!"))
      .catch((error) => console.log(error.message));
  };
  const list = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {!user ? (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      ) : (
        <>
          <li>
            <NavLink to="/cart-details">
              <BsHandbag className="text-2xl"></BsHandbag>
            </NavLink>
          </li>
          <li>
            <NavLink to="/booked-services">My Bookings</NavLink>
          </li>
          <button onClick={handleLogouUser}>Logout</button>
        </>
      )}
      {user && (
        <li>
          <NavLink to="/profile">
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt="user photo"
            />
          </NavLink>
        </li>
      )}
      <li>
        <Link to="/appointments">
          <button className="border-[1px] border-solid border-[#FF3811] rounded-md text-[#FF3811] px-5 py-2">
            Appointment
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <div className="flex justify-between lg:items-center my-10">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="md:flex hidden items-center  gap-8">{list}</ul>
      {/* mobile menu  */}
      <div className="md:hidden relative me-1">
        <div className="flex flex-col items-end">
          {!isShow ? (
            <FaBars
              onClick={handleShow}
              className="text-3xl cursor-pointer"
            ></FaBars>
          ) : (
            <ImCross
              onClick={handleShow}
              className="text-3xl cursor-pointer"
            ></ImCross>
          )}
        </div>
        {isShow && (
          <ul className="absolute z-50 right-0 flex flex-col items-end bg-[#40f18a] space-y-5 p-5">
            {list}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
