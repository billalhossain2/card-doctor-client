import React from 'react'
import Banner from '../Shared/Banner/Banner'

const AddNewService = () => {
    const bannerInfo = {
        title:"Add New Service",
        path:"Home/Add New Service",
        img:"/none"
      }
  return (
    <div>
        <Banner bannerInfo={bannerInfo}></Banner>
        <form className='max-w-[900px] mx-auto bg-gray-200 md:px-10 px-3 py-5 rounded-lg mb-10'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                <input className='bg-white outline-none rounded-lg px-5 py-3' type="text" placeholder='Service Name'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' type="text" placeholder='Service Price'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' type="text" placeholder='Text Here'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' type="text" placeholder='Service Type'/>
            </div>
            <textarea className='w-full mt-5 px-5 py-3 outline-none' name="" id="" cols="30" rows="10" placeholder='Product Description'></textarea>
            <input className='bg-[#FF3811] text-white px-5 py-2 rounded-lg w-full mb-3 cursor-pointer' type="submit" value="Add New Service"/>
        </form>
    </div>
  )
}

export default AddNewService