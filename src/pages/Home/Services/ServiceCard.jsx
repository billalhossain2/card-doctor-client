import cardImg from "../../../assets/images/services/2.jpg"
import { AiOutlineArrowRight } from 'react-icons/ai';
const ServiceCard = ({service}) => {
    const {img, title, price} = service || {}
  return (
    <div className="space-y-2 border-[1px] border-solid border-[#e4dfdf] p-5 rounded-lg cursor-pointer">
        <img className="rounded-lg" src={img} alt="service image" />
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="text-[#FF3811] font-bold flex justify-between">
        <p>Price : ${price}</p>
        <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
    </div>
  )
}

export default ServiceCard