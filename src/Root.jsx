import { Outlet } from "react-router-dom"
import Footer from "./pages/Shared/Footer/Footer"
import Navbar from "./pages/Shared/Navbar/Navbar"

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root