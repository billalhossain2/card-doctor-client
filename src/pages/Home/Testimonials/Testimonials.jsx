import React, { useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  useEffect(()=>{
    fetch('testimonials.json')
    .then(res => res.json())
    .then(data => setTestimonials(data))
    .catch(error => console.log(error.message))
  }, [])
  return (
    <div className='px-3 mb-32'>
        <div className='space-y-3 text-center mb-10'>
            <p className='font-bold text-[#FF3811]'>Testimonial</p>
            <h1 className="text-5xl font-bold">What Customer Says</h1>
            <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10'>
            {
              testimonials?.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial}></TestimonialCard>)
            }
        </div>
    </div>
  )
}

export default Testimonials