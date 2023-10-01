import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
const ServiceCardItem = () => {
  return (
    <div className="bg-white flex justify-between items-center font-bold hover:bg-[#FF3811] hover:text-white cursor-pointer p-3 rounded-md">
      <p>Full Car Repair</p>
      <AiOutlineArrowRight className="text-2xl"></AiOutlineArrowRight>
    </div>
  );
};

export default ServiceCardItem;
