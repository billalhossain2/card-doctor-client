import { SlCalender } from 'react-icons/sl';
const AvailableCard = ({available:{icon, title, available_status}}) => {
  return (
    <div className='flex md:gap-5 gap-3 items-center'>
      <img src={icon} alt="" />
      <div>
        <p>{title}</p>
        <h3 className="md:text-3xl text-xl font-bold">{available_status}</h3>
      </div>
    </div>
  )
}

export default AvailableCard