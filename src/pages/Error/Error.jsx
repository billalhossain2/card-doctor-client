import { useRouteError, Link } from "react-router-dom";
import errorImg from "../../assets/error.png";
import Navbar from "../Shared/Navbar/Navbar";
import useTitle from "../../Hooks/useTitle";
const Error = () => {
  useTitle('Error - Car Doctor')
  const error = useRouteError();
  return (
    <>
    <div className="flex justify-center items-center flex-col space-y-3 mt-20">
        <div>
        <img className="w-96" src={errorImg} alt="Error Image" />
        </div>
        <h3 className="text-2xl">{error?.status}</h3>
        <h3 className="text-2xl">{error?.error?.message}</h3>
        <h3 className="text-2xl">{error?.statusText}</h3>
        <Link to="/"><button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">Go Home</button></Link>
    </div>
    </>
  )
}

export default Error