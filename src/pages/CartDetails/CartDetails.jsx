import React from "react";
import Banner from "../Shared/Banner/Banner";
import productImg from "../../assets/images/banner/slider3.jpg";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import useTitle from "../../Hooks/useTitle";
const CartDetails = () => {
  useTitle('Cart Details - Car Doctor')
  const bannerInfo = {
    title: "Cart Details",
    path: "Home/Cart Details",
    img: "/none",
  };
  return (
    <div>
      <Banner bannerInfo={bannerInfo}></Banner>
      <div className="overflow-x-auto">
        <table className="table mb-10">
          {/* head */}
          <thead>
            <tr>
              <th>
                Action
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <button className="btn btn-circle border-[1px] border-solid border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={productImg}
                        alt="Service Image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Martha Knit Top</div>
                    <div className="text-sm opacity-50">Color: Green</div>
                    <div className="text-sm opacity-50">Size: S</div>
                  </div>
                </div>
              </td>
              <td>
              $25.00
              </td>
              <td>01/10/2023</td>
              <th>
                <button className="bg-[#FF3811] text-white px-5 py-2 rounded-lg">Pending</button>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
            <td className="flex items-center cursor-pointer gap-2"> <HiArrowUturnLeft className="text-2xl"></HiArrowUturnLeft> Continue Shopping</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="flex items-center cursor-pointer gap-2"> <RiDeleteBin6Line className="text-2xl"></RiDeleteBin6Line> Clear Shopping Cart</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CartDetails;
