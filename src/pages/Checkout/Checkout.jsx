import React from 'react'
import Banner from '../Shared/Banner/Banner'

const Checkout = () => {
    const bannerInfo = {
        title:"Checkout",
        path:"Home/Checkout",
        img:"/none"
      }
  return (
    <div>
        <Banner bannerInfo={bannerInfo}></Banner>
        <form className='max-w-[900px] mx-auto bg-gray-200 md:px-10 px-3 py-5 rounded-lg mb-10'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                <input className='bg-white outline-none rounded-lg px-5 py-3' type="text" placeholder='First Name'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' type="text" placeholder='Last Name'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' type="text" placeholder='Your Phone'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' type="text" placeholder='Your Email'/>
            </div>
            <textarea className='w-full mt-5 px-5 py-3 outline-none' name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <input className='bg-[#FF3811] text-white px-5 py-2 rounded-lg w-full mb-3 cursor-pointer' type="submit" value="Order Confirm"/>
        </form>
    </div>
  )
}

export default Checkout