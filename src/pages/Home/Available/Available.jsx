import { useEffect, useState } from 'react'
import AvailableCard from './AvailableCard'
import useFetch from '../../../Hooks/useFetch'

const Available = () => {
    const availables = useFetch('available.json')
  return (
    <div className='mb-32 flex lg:flex-row flex-col lg:justify-between justify-center items-center bg-[#151515] text-white min-h-[300px] py-5 lg:px-20 px-3 rounded-lg lg:gap-0 gap-10'>
        {
            availables?.map(available => <AvailableCard key={available.id} available={available}></AvailableCard>)
        }
    </div>
  )
}

export default Available