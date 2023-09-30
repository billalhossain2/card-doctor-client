import React from 'react'
import productImg  from "../../../assets/tools/battery.jpg"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const ProductCard = ({product:{image, ratings, title, price}}) => {
  return (
    <div className='space-y-2 flex flex-col justify-between items-center border-[1px] border-solid border-[#e7e3e3] rounded-lg p-3'>
        <img className='w-full h-[250px]' src={image} alt="Product Image" />
        <Rating style={{ maxWidth: 150 }} value={ratings} readOnly></Rating>
        <h3 className='font-bold text-2xl'>{title}</h3>
        <p className='text-[#FF3811] font-bold text-2xl'>${price}</p>
    </div>
  )
}

export default ProductCard