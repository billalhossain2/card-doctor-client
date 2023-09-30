import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(error => console.log(error.message))
    }, [])
  return (
    <div className='mb-32 px-2'>
        <div className='space-y-3 text-center mb-10'>
            <h3 className='font-bold text-[#FF3811]'>Service</h3>
            <h3 className="md:text-5xl text-3xl font-bold">Our Service Area</h3>
            <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. </p>
        </div>
       <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {
            services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
       </div>
      <div className='text-center'><button className='text-center mt-5 border-[1px] border-solid border-[#FF3811] text-[#FF3811] px-5 py-3 rounded-lg hover:bg-[#FF3811] hover:text-white font-bold'>More Services</button></div>
    </div>
  )
}

export default Services