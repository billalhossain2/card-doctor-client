import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const TestimonialCard = ({testimonial}) => {
  const {image, author, position, testimonial_text, rating, quote} = testimonial || {};
  return (
    <div className="space-y-3 border-[1px] border-solid border-[#ece8e8] p-5 flex flex-col justify-between rounded-lg">
        <div className="flex md:flex-row flex-col gap-3 items-center">
          <img className="w-10 h-10 rounded-full" src={image} alt="client" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{position}</p>
          </div>
          <p className="ml-10"><img src={quote} alt="Qoute" /></p>
        </div>
        <p className="text-[#737373]">{testimonial_text}</p>
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
    </div>
  )
}

export default TestimonialCard