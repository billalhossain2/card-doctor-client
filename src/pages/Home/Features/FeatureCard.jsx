import React from 'react'

const FeatureCard = ({feature}) => {
  const {image, feature_title} = feature || {};
  return (
    <div className='flex flex-col items-center space-y-5 border-[1px] border-solid border-[#e2dede] p-3 rounded-lg'>
      <img className='w-16 h-16' src={image} alt="feature image" />
      <h4>{feature_title}</h4>
    </div>
  )
}

export default FeatureCard