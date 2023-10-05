import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import uid from "../../../utilities/uid"
import useFetch from "../../../Hooks/useFetch"

const Products = () => {
    const products = useFetch('http://localhost:9000/products')
  return (
    <div className="mb-32 px-3">
        <div className="space-y-3 text-center mb-10">
        <h3 className="text-[#FF3811] font-bold">Popular Products</h3>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                products?.map(product => <ProductCard key={uid()} product={product}></ProductCard>)
            }
        </div>
        <div className='text-center'><button className='text-center mt-5 border-[1px] border-solid border-[#FF3811] text-[#FF3811] px-5 py-3 rounded-lg hover:bg-[#FF3811] hover:text-white font-bold'>More Products</button></div>
    </div>
  )
}

export default Products