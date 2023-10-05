import React, { useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard'
import uid from '../../../utilities/uid'
import useFetch from '../../../Hooks/useFetch'

const Testimonials = () => {
  const testimonials = useFetch('testimonials.json')
  return (
    <div className='px-3 mb-16'>
        <div className='space-y-3 text-center mb-10'>
            <p className='font-bold text-[#FF3811]'>Testimonial</p>
            <h1 className="text-5xl font-bold">What Customer Says</h1>
            <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10'>
            {
              testimonials?.map(testimonial => <TestimonialCard key={uid()} testimonial={testimonial}></TestimonialCard>)
            }
        </div>
    </div>
  )
}

export default Testimonials