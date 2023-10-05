import React, { useContext, useEffect, useState } from 'react'
import Banner from '../Shared/Banner/Banner'
import { HiArrowUturnLeft } from 'react-icons/hi2';
import { RiDeleteBin6Line } from 'react-icons/ri';
import productImg from "../../assets/images/banner/slider3.jpg";
import useTitle from '../../Hooks/useTitle';
import BookedRow from './BookedRow';
import { userContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const BookedServices = () => {
    useTitle("Booked Services - Car Doctor")
    const bannerInfo = {
        title: "Booked Services",
        path: "Home/Booked Services",
        img: "/none",
      };
      const {user} = useContext(userContext);
      const [bookedServices, setBookedServices] = useState([])
      useEffect(()=>{
        console.log('loging........')
        fetch(`http://localhost:9000/bookings/?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setBookedServices(data))
        .catch(error => console.log(error.message))
      }, [user])

    //   delete from bookings 
    const handleDelete = (id)=>{
        // delete confirmation alert 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your booked item has been deleted.',
                'success'
              )
              //agreed to delete 
              fetch(`http://localhost:9000/bookings/${id}`, {method:"DELETE"})
              .then(res => res.json())
              .then(result => {
                  if(result.acknowledged){
                      const resBooked = bookedServices.filter(booked => booked._id !== id)
                      setBookedServices(resBooked)
                  }
              })
              .catch(error => console.log(error.message))
            }
          })
    }

    const handleConfirm = (id)=>{
        fetch(`http://localhost:9000/bookings/${id}`, {
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({status:"confirmed"})
        })
        .then(res => res.json())
        .then(result => {
            if(result.acknowledged){
                //update state
                const restBooked = bookedServices.filter(item => item._id !== id)
                const updated = bookedServices.find(item => item._id === id);
                updated.status = "confirmed"
                setBookedServices([...restBooked, updated])
            }
        })
        .catch(error => console.log(error.message))
    }
  return (
    <div>
    <Banner bannerInfo={bannerInfo}></Banner>
    <div className="overflow-x-auto">
      <table className="table mb-10">
        {/* head */}
        <thead>
          <tr>
            <th>Action</th>
            <th>Image</th>
            <th>Title</th>
            <th>Email</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* rows*/}
          {
            bookedServices?.map(booked => <BookedRow key={booked._id} booked={booked} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookedRow>)
          }
        </tbody>
        <tfoot>
          {/* <tr>
          <td className="flex items-center cursor-pointer gap-2"> <HiArrowUturnLeft className="text-2xl"></HiArrowUturnLeft> Continue Shopping</td>
          <td className="flex items-center cursor-pointer gap-2"> <RiDeleteBin6Line className="text-2xl"></RiDeleteBin6Line> Clear Shopping Cart</td>
          </tr> */}
        </tfoot>
      </table>
    </div>
  </div>
  )
}

export default BookedServices