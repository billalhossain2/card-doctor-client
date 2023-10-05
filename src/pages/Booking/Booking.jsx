import React, { useContext, useEffect, useState } from 'react'
import useTitle from '../../Hooks/useTitle'
import Banner from '../Shared/Banner/Banner'
import { useParams } from 'react-router-dom'
import { userContext } from '../../Providers/AuthProvider'
import Swal from 'sweetalert2'

const Booking = () => {
    useTitle("Booking - Car Doctor")
      const [service, setService] = useState(null)
      const {title, price, img} = service || {}
      const {user} = useContext(userContext)
      const bannerInfo = {
        title:"Booking",
        path:"Home/Booking",
        img:`${img}`
      }
      const {bookingId} = useParams()
      useEffect(()=>{
        fetch(`http://localhost:9000/services/${bookingId}`)
        .then(res => res.json())
        .then(data => setService(data))
        .catch(error => console.log(error.message))
      }, [])

      const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const imgUrl = form.imgUrl.value;
        const date = form.date.value;
        const price = form.price.value;
        const email = form.email.value;
        const newBooking = {title, imgUrl, date, price, email}
        fetch("http://localhost:9000/bookings", {
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(result => {
          if(result.acknowledged){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Booking successfully added',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        .catch(error => console.log(error.message))
      }
  return (
    <div>
        <Banner bannerInfo={bannerInfo}></Banner>
        <form className='max-w-[900px] mx-auto bg-gray-200 md:px-10 px-3 py-5 rounded-lg mb-10' onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                <input className='bg-white outline-none rounded-lg px-5 py-3' defaultValue={title} name="title" type="text" placeholder='Service Name'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' defaultValue={img} name="imgUrl" type="text" placeholder='Image Url'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' type="date" name="date" placeholder='Date'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' defaultValue={price} name="price" type="text" placeholder='$ Price'/>
                <input className='bg-white outline-none rounded-lg px-5 py-3' defaultValue={user?.email} name="email" type="text" placeholder='Email'/>
            </div>
            <input className='bg-[#FF3811] text-white px-5 py-2 rounded-lg w-full mt-3 mb-3 cursor-pointer' type="submit" value="Book"/>
        </form>
    </div>
  )
}

export default Booking