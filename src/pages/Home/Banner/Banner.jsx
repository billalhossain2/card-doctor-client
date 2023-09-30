import React from 'react'
import slide1 from "../../../assets/images/banner/slider1.jpg"
import slide2 from "../../../assets/images/banner/slider2.jpg"
import slide3 from "../../../assets/images/banner/slider3.jpg"
import slide4 from "../../../assets/images/banner/slider4.jpg"
import slide5 from "../../../assets/images/banner/slider5.jpg"
import slide6 from "../../../assets/images/banner/slider6.jpg"
const Banner = () => {
  return (
<div className="carousel w-full h-[500px] rounded-lg">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slide1} className="w-full" />
    <div className='absolute bg-[#000000be] text-white h-full w-full flex items-center gap-5'>
        <div className='md:ml-20 ml-2 space-y-5'>
        <h3 className="md:text-5xl text-3xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
        <p className='text-[#FFFFFF]'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className='md:block md:space-x-5 flex gap-3 flex-col md:w-auto w-40'>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Discover More</button>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute flex md:justify-end justify-start md:bottom-10 bottom-2 md:right-10 gap-5">
      <a href="#slide6" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={slide2} className="w-full" />
  <div className='absolute bg-[#000000be] text-white h-full w-full flex items-center gap-5'>
        <div className='md:ml-20 ml-2 space-y-5'>
        <h3 className="md:text-5xl text-3xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
        <p className='text-[#FFFFFF]'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className='md:block md:space-x-5 flex gap-3 flex-col md:w-auto w-40'>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Discover More</button>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute flex md:justify-end justify-start md:bottom-10 bottom-2 md:right-10 gap-5">
      <a href="#slide1" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={slide3} className="w-full" />
  <div className='absolute bg-[#000000be] text-white h-full w-full flex items-center gap-5'>
        <div className='md:ml-20 ml-2 space-y-5'>
        <h3 className="md:text-5xl text-3xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
        <p className='text-[#FFFFFF]'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className='md:block md:space-x-5 flex gap-3 flex-col md:w-auto w-40'>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Discover More</button>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute flex md:justify-end justify-start md:bottom-10 bottom-2 md:right-10 gap-5">
      <a href="#slide2" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={slide4} className="w-full" />
  <div className='absolute bg-[#000000be] text-white h-full w-full flex items-center gap-5'>
        <div className='md:ml-20 ml-2 space-y-5'>
        <h3 className="md:text-5xl text-3xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
        <p className='text-[#FFFFFF]'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className='md:block md:space-x-5 flex gap-3 flex-col md:w-auto w-40'>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Discover More</button>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute flex md:justify-end justify-start md:bottom-10 bottom-2 md:right-10 gap-5">
      <a href="#slide3" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❮</a> 
      <a href="#slide5" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <img src={slide5} className="w-full" />
  <div className='absolute bg-[#000000be] text-white h-full w-full flex items-center gap-5'>
        <div className='md:ml-20 ml-2 space-y-5'>
        <h3 className="md:text-5xl text-3xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
        <p className='text-[#FFFFFF]'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className='md:block md:space-x-5 flex gap-3 flex-col md:w-auto w-40'>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Discover More</button>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute flex md:justify-end justify-start md:bottom-10 bottom-2 md:right-10 gap-5">
      <a href="#slide4" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❮</a> 
      <a href="#slide6" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
  <img src={slide6} className="w-full" />
  <div className='absolute bg-[#000000be] text-white h-full w-full flex items-center gap-5'>
        <div className='md:ml-20 ml-2 space-y-5'>
        <h3 className="md:text-5xl text-3xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h3>
        <p className='text-[#FFFFFF]'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className='md:block md:space-x-5 flex gap-3 flex-col md:w-auto w-40'>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Discover More</button>
        <button className='px-5 py-3 rounded-md text-white border-[1px] border-solid border-white hover:bg-[#FF3811]'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute flex md:justify-end justify-start md:bottom-10 bottom-2 md:right-10 gap-5">
      <a href="#slide5" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-[#00000065] text-white border-0 hover:bg-[#FF3811]">❯</a>
    </div>
  </div>
</div>
  )
}

export default Banner