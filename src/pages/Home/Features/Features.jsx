import React, { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard'
import uid from '../../../utilities/uid'
import useFetch from '../../../Hooks/useFetch'

const Features = () => {
  const features = useFetch('features.json')
  return (
    <div className='mb-32 px-3'>
      <div className='space-y-3 text-center'>
      <p className='text-[#FF3811] font-bold'>Core Features</p>
      <h1 className="text-5xl font-bold">Why Choose Us</h1>
      <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 md:gap-5 gap-10 mt-10'>
        {
          features?.map(feature => <FeatureCard key={uid()} feature={feature}></FeatureCard>)
        }
      </div>
    </div>
  )
}

export default Features