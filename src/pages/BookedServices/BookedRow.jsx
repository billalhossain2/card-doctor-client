import React from "react";

const BookedRow = ({booked, handleDelete, handleConfirm}) => {
    const {_id, imgUrl, title, email, price, date, status} = booked || {};
  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle border-[1px] border-solid border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
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
        <img className="w-16 h-16" src={imgUrl} alt="Booked Img" />
      </td>
      <td>{title}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        { status==="confirmed" ? <span className="font-bold text-green-600">Confirmed</span> :
            <button onClick={()=>handleConfirm(_id)} className="bg-[#FF3811] text-white px-5 py-2 rounded-lg">
          Confirm
        </button>}
      </th>
    </tr>
  );
};

export default BookedRow;
