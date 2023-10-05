import { Link } from "react-router-dom";
import cardImg from "../../../assets/images/services/2.jpg"
import { AiOutlineArrowRight } from 'react-icons/ai';
const ServiceCard = ({service}) => {
    const {_id, img, title, price} = service || {}
  return (
    <div className="space-y-2 border-[1px] border-solid border-[#e4dfdf] p-5 rounded-lg flex flex-col justify-between">
        <img className="rounded-lg" src={img} alt="service image" />
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="text-[#FF3811] font-bold flex justify-between">
        <p>Price : ${price}</p>
        <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
        <Link to={`/booking/${_id}`}>
        <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">Book Now</button>
        </Link>
    </div>
  )
}

export default ServiceCard